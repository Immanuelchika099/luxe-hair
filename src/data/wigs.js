const images = {
  boneStraight:
    'https://www.linktohair.com/cdn/shop/files/NaturalBlack13x4LaceFrontWigDeepSidePartShortBobHumanHairWig_8.jpg?v=1720685649',
  sleekBlack:
    'https://m.wigginshair.com/media/catalog/product/cache/6/thumbnail/750x/9df78eab33525d08d6e5fb8d27136e95/p/r/pre_styled_stylist_haircut.jpg',
  bodyWave:
    'https://sc04.alicdn.com/kf/Hc6090008ae0e492397640632bb7e5dccX.jpg',
  deepWave:
    'https://cdn.wigginshair.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/9/99j_deep_wave_wig_1_1.jpg',
  burgundyWave:
    'https://www.tunefulhair.com/cdn/shop/products/72.jpg?v=1668585476',
  burgundyStraight:
    'https://aima.juliahair.com/ol/media/catalog/product/b/u/burgundy_colored_human_hair_wigs.jpg',
  honeyBlonde:
    'https://sc04.alicdn.com/kf/H0bbc979514f1477c902162359866691eY.jpg',
  blondeWave:
    'https://sc04.alicdn.com/kf/Ha65d326d74fc49c1a02501a88eb46640z.jpg',
  bobWave:
    'https://sc04.alicdn.com/kf/H49663c1e5ce443f2a25de3a925a65dd2f.jpg',
};

const catalog = [
  ['Naomi', 'Raw Virgin', '24 inch', 'Natural Black', 385000, 'sleekBlack', 'New', 'Body Wave'],
  ['Amara', 'HD Lace', '28 inch', 'Soft Espresso', 460000, 'bodyWave', 'Bestseller', 'Loose Wave'],
  ['Zuri', 'Silk Top', '22 inch', 'Deep Brunette', 325000, 'boneStraight', '', 'Silky Straight'],
  ['Imani', 'Raw Virgin', '26 inch', 'Natural Black', 425000, 'bodyWave', '', 'Body Wave'],
  ['Sade', 'HD Lace', '30 inch', 'Mocha Melt', 495000, 'honeyBlonde', 'New', 'Loose Wave'],
  ['Nia', 'Silk Top', '20 inch', 'Espresso', 295000, 'sleekBlack', '', 'Silky Straight'],
  ['Amina', 'Raw Virgin', '24 inch', 'Honey Brown', 398000, 'honeyBlonde', '', 'Body Wave'],
  ['Maya', 'HD Lace', '26 inch', 'Caramel Melt', 448000, 'blondeWave', 'Bestseller', 'Loose Wave'],
  ['Dara', 'Silk Top', '18 inch', 'Natural Black', 285000, 'bobWave', '', 'Silky Straight'],
  ['Ari', 'Raw Virgin', '28 inch', 'Jet Black', 465000, 'sleekBlack', '', 'Body Wave'],
  ['Teni', 'HD Lace', '30 inch', 'Chestnut', 515000, 'burgundyWave', 'New', 'Loose Wave'],
  ['Zahra', 'Silk Top', '22 inch', 'Mocha', 335000, 'bobWave', '', 'Silky Straight'],
  ['Lola', 'Raw Virgin', '26 inch', 'Soft Black', 430000, 'sleekBlack', '', 'Body Wave'],
  ['Amaka', 'HD Lace', '24 inch', 'Honey Blonde', 415000, 'blondeWave', '', 'Loose Wave'],
  ['Yara', 'Silk Top', '20 inch', 'Dark Chocolate', 310000, 'boneStraight', '', 'Silky Straight'],
  ['Kemi', 'Raw Virgin', '28 inch', 'Natural Black', 475000, 'bodyWave', 'Bestseller', 'Body Wave'],
  ['Ayla', 'HD Lace', '26 inch', 'Cinnamon', 445000, 'honeyBlonde', '', 'Loose Wave'],
  ['Simi', 'Silk Top', '18 inch', 'Espresso', 280000, 'bobWave', '', 'Silky Straight'],
  ['Reni', 'Raw Virgin', '30 inch', 'Natural Black', 535000, 'deepWave', 'New', 'Body Wave'],
  ['Mila', 'HD Lace', '24 inch', 'Champagne Blonde', 425000, 'blondeWave', '', 'Loose Wave'],
  ['Ada', 'Silk Top', '22 inch', 'Cocoa', 320000, 'boneStraight', '', 'Silky Straight'],
  ['Zola', 'Raw Virgin', '26 inch', 'Raven', 440000, 'sleekBlack', '', 'Body Wave'],
  ['Tara', 'HD Lace', '28 inch', 'Warm Honey', 478000, 'honeyBlonde', 'Bestseller', 'Loose Wave'],
  ['Eni', 'Silk Top', '20 inch', 'Black Coffee', 305000, 'bobWave', '', 'Silky Straight'],
  ['Nora', 'Raw Virgin', '24 inch', 'Auburn', 395000, 'burgundyWave', '', 'Body Wave'],
  ['Chioma', 'HD Lace', '30 inch', 'Deep Mocha', 510000, 'deepWave', 'New', 'Loose Wave'],
  ['Kaya', 'Silk Top', '22 inch', 'Soft Black', 330000, 'boneStraight', '', 'Silky Straight'],
  ['Jade', 'Raw Virgin', '28 inch', 'Cherry Brown', 468000, 'burgundyStraight', '', 'Body Wave'],
  ['Mimi', 'HD Lace', '26 inch', 'Golden Blonde', 452000, 'honeyBlonde', '', 'Loose Wave'],
  ['Sola', 'Silk Top', '18 inch', 'Natural Black', 275000, 'bobWave', '', 'Silky Straight'],
  ['Omotola', 'HD Lace', '26 inch', 'Rich Espresso', 445000, 'boneStraight', 'Signature', 'Bone Straight'],
  ['Adunni', 'Raw Virgin', '30 inch', 'Natural Black', 525000, 'sleekBlack', 'New', 'Bone Straight'],
  ['Tolu', 'HD Lace', '28 inch', 'Soft Mocha', 485000, 'bodyWave', 'Bestseller', 'Bone Straight'],
  ['Dami', 'Silk Top', '24 inch', 'Jet Black', 355000, 'sleekBlack', '', 'Bone Straight'],
  ['Nneka', 'Raw Virgin', '32 inch', 'Natural Black', 575000, 'deepWave', 'Couture', 'Bone Straight'],
];

const descriptions = [
  'Meticulously finished for a soft, natural hairline and fluid movement. A statement unit designed for elevated everyday wear.',
  'A polished couture unit with breathable lace, luxurious density and a finish that photographs beautifully.',
  'Silky, lightweight and versatile, with an effortless shape designed to move naturally with you.',
  'Ultra-sleek bone-straight strands with a glass-like finish, designed for that clean, expensive look.',
];

export const wigs = catalog.map(
  ([name, type, length, shade, price, key, badge, texture], i) => ({
    id: i + 1,
    name: `The ${name}`,
    type,
    length,
    shade,
    price,
    badge: badge || 'Couture',
    image: images[key],
    texture,
    density: i % 3 === 0 ? '180%' : '150%',
    description:
      descriptions[i % descriptions.length],
  })
);
