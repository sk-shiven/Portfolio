import { useState, useEffect } from 'react';

const darkenColor = (hex, percent) => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split('')
      .map(c => c + c)
      .join('');
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const hexToRgba = (hex, alpha) => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split('')
      .map(c => c + c)
      .join('');
  }
  const num = parseInt(color, 16);
  const r = (num >> 16) & 0xff;
  const g = (num >> 8) & 0xff;
  const b = num & 0xff;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const Folder = ({ color = '#5227FF', size = 1, items = [], className = '' }) => {
  const maxItems = items.length || 1;
  const papers = items.length === 0 ? [null] : items;

  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const folderBackColor = darkenColor(color, 0.08);
  const currentBackColor = open ? hexToRgba(folderBackColor, 0.25) : folderBackColor;

  const papersColors = Array.from({ length: maxItems }, (_, i) => {
    const percent = 0.15 * (1 - (i / (maxItems - 1 || 1)));
    return darkenColor('#ffffff', percent);
  });

  const handleClick = () => {
    setOpen(prev => !prev);
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperMouseMove = (e, index) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (e, index) => {
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const folderStyle = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor
  };

  const currentSize = isMobile ? size * 0.6 : size;
  const scaleStyle = { transform: `scale(${currentSize})` };

  const getOpenTransform = index => {
    // Width and height factors (as percentages of folder width/height)
    const cardWidthFactor = 70 + (index * (20 / (maxItems - 1 || 1)));
    const cardHeightFactor = 80 - (index * (10 / (maxItems - 1 || 1)));

    if (isMobile) {
      // 2-column grid layout for mobile viewports (generic for any maxItems)
      const isLastRowSingle = (maxItems % 2 !== 0) && (index === maxItems - 1);
      const col = isLastRowSingle ? 0.5 : index % 2;
      const row = Math.floor(index / 2);
      const totalRows = Math.ceil(maxItems / 2);

      // Horizontal spacing (relative to folder center)
      let targetCenterX_folder = 0;
      if (col === 0) targetCenterX_folder = -55;
      if (col === 1) targetCenterX_folder = 55;
      if (col === 0.5) targetCenterX_folder = 0;

      // Vertical spacing: row 0 is top, last row is bottom (closer to folder opening)
      const targetY_folder = -10 - (totalRows - 1 - row) * 65;

      const targetX_folder = targetCenterX_folder - cardWidthFactor / 2;

      const x = (targetX_folder / cardWidthFactor) * 100;
      const y = (targetY_folder / cardHeightFactor) * 100;

      // 0 degrees rotation to make the text in the grid fully readable
      return `translate(${x}%, ${y}%) rotate(0deg)`;
    }

    if (maxItems === 1) {
      const targetX_folder = -cardWidthFactor / 2;
      const targetY_folder = -120;

      const x = (targetX_folder / cardWidthFactor) * 100;
      const y = (targetY_folder / cardHeightFactor) * 100;
      return `translate(${x}%, ${y}%) rotate(0deg)`;
    }

    // Gap in terms of folder width
    const gapX = 75;
    const totalXRange = gapX * (maxItems - 1);
    const targetCenterX_folder = -totalXRange / 2 + index * gapX;
    const targetX_folder = targetCenterX_folder - cardWidthFactor / 2;

    // Tighter angle spread
    const gapAngle = 25;
    const totalAngle = Math.min(gapAngle * (maxItems - 1), 100);
    const startAngle = -totalAngle / 2;
    const currentAngle = startAngle + (index / (maxItems - 1)) * totalAngle;

    // Y spread: parabolic in folder height percent
    const normalizedCenter = (index / (maxItems - 1)) * 2 - 1;
    const yRange_folder = 40;
    const yBase_folder = -130;
    const targetY_folder = yBase_folder + Math.pow(normalizedCenter, 2) * yRange_folder;

    // Convert to card percentages
    const x = (targetX_folder / cardWidthFactor) * 100;
    const y = (targetY_folder / cardHeightFactor) * 100;

    return `translate(${x}%, ${y}%) rotate(${currentAngle}deg)`;
  };

  return (
    <div style={scaleStyle} className={className}>
      <div
        className={`group relative transition-all duration-200 ease-in cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ${!open ? 'hover:-translate-y-2' : ''
          }`}
        style={{
          ...folderStyle,
          transform: open ? 'translateY(-8px)' : undefined
        }}
        onClick={handleClick}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        }}
        tabIndex={0}
        role="button"
        aria-expanded={open}
        aria-label={open ? 'Close folder' : 'Open folder'}
      >
        <div
          className="relative w-[100px] h-[80px] rounded-tl-0 rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] transition-colors duration-300"
          style={{ backgroundColor: currentBackColor }}
        >
          <span
            className="absolute z-0 bottom-[98%] left-0 w-[30px] h-[10px] rounded-tl-[5px] rounded-tr-[5px] rounded-bl-0 rounded-br-0 transition-colors duration-300"
            style={{ backgroundColor: currentBackColor }}
          ></span>
          {papers.map((item, i) => {
            const widthStr = `${70 + (i * (20 / (maxItems - 1 || 1)))}%`;
            const heightClosedStr = `${80 - (i * (40 / (maxItems - 1 || 1)))}%`;
            const heightOpenStr = `${80 - (i * (10 / (maxItems - 1 || 1)))}%`;

            const transformStyle = open
              ? `${getOpenTransform(i)} translate(${paperOffsets[i].x}px, ${paperOffsets[i].y}px)`
              : undefined;

            return (
              <div
                key={i}
                onMouseMove={e => handlePaperMouseMove(e, i)}
                onMouseLeave={e => handlePaperMouseLeave(e, i)}
                className={`absolute z-20 bottom-[10%] left-1/2 transition-all duration-300 ease-in-out ${!open ? 'transform -translate-x-1/2 translate-y-[10%] group-hover:translate-y-0' : 'hover:scale-110'
                  }`}
                style={{
                  width: widthStr,
                  height: open ? heightOpenStr : heightClosedStr,
                  ...(!open ? {} : { transform: transformStyle }),
                  backgroundColor: papersColors[i],
                  borderRadius: '10px'
                }}
              >
                {item}
              </div>
            );
          })}

          <div
            className={`absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out ${!open ? 'group-hover:[transform:skew(15deg)_scaleY(0.6)]' : ''
              }`}
            style={{
              backgroundColor: color,
              borderRadius: '5px 10px 10px 10px',
              opacity: open ? 0.25 : 1,
              ...(open && { transform: 'skew(15deg) scaleY(0.6)' })
            }}
          ></div>
          <div
            className={`absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out ${!open ? 'group-hover:[transform:skew(-15deg)_scaleY(0.6)]' : ''
              }`}
            style={{
              backgroundColor: color,
              borderRadius: '5px 10px 10px 10px',
              opacity: open ? 0.25 : 1,
              ...(open && { transform: 'skew(-15deg) scaleY(0.6)' })
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
