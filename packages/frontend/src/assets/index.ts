export const svgUrl = svgPath => {
    const svg = require(`./svg/${svgPath}`);
    const encodedSvg = encodeURIComponent(svg);
  
    return `data:image/svg+xml;utf8,${encodedSvg}`;
  };
