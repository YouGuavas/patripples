const vendors = [
	{
		name: 'Adventure Textiles',
		tags: ['clothing', 'x'],
		website: 'https://www.adventuretextiles.com/',
		ig: 'https://www.instagram.com/adventuretextiles/',
		facebook: 'https://www.facebook.com/adventuretextiles/',
	},
	{
		name: 'Aether Arts',
		tags: ['metalwork', 'x'],
		ig: 'https://www.instagram.com/aether_arts_/',
	},
	{
		name: 'Apple & Thistle Press',
		tags: ['illustrations', 'x'],
		website: 'https://www.appleandthistle.com/',
		ig: 'https://www.instagram.com/APPLEANDTHISTLE',
	},
	{
		name: 'Art By Joey',
		tags: ['clothing', 'x'],
		ig: 'https://www.instagram.com/joey_strain/',
		facebook: 'https://www.facebook.com/artbyjoeystrain/',
		etsy: 'https://www.etsy.com/shop/Artbyjoeystrain',
	},
	{
		name: 'Art of Todd Marsee',
		tags: ['painting', 'x'],
		website: 'https://marseegallery.com/',
		ig: 'https://www.instagram.com/artoftoddmarsee/',
		facebook: 'https://www.facebook.com/artoftoddmarsee/',
	},
	{
		name: 'Awanya',
		tags: ['clothing', 'x'],
		ig: 'https://www.instagram.com/awanya_designs/',
		etsy: 'https://www.etsy.com/shop/awanya/',
		facebook: 'https://www.facebook.com/awanya.designs/',
	},
	{
		name: 'Bay Art Design',
		tags: ['jewelry', 'x'],
		ig: 'https://www.instagram.com/bayart.design/',
		facebook: 'https://www.facebook.com/bayartdesign1/',
		etsy: 'https://www.etsy.com/shop/bayartdesign/',
	},
	{
		name: 'Big Mitten Linocuts',
		tags: ['fine art', 'x'],
		ig: 'https://www.instagram.com/bigmittenlinocuts/',
		website: 'https://www.bigmittenlinocuts.com/',
		facebook: 'https://www.facebook.com/bigmittenlinocuts/',
	},
	{
		name: 'Birch & Fern',
		tags: ['skincare', 'x'],
		website: 'https://www.birchnfern.com/',
		ig: 'https://www.instagram.com/birchnfern/',
		facebook: 'https://www.facebook.com/birchnfern/',
	},
	{
		name: 'Capital Hippie',
		tags: ['clothing', 'x'],
		website: 'https://www.capitalhippie.com/',
		ig: 'https://www.instagram.com/capitalhippie/',
		facebook: 'https://www.facebook.com/capitalhippie/',
	},
	{
		name: 'Colorado Restrung',
		tags: ['jewelry', 'x'],
		website: 'https://www.coloradorestrung.com/',
		ig: 'https://www.instagram.com/colorado_restrung/',
		facebook: 'https://www.facebook.com/coloradorestrung/',
	},
	{
		name: 'Conscious Clothing',
		tags: ['clothing', 'x'],
		website: 'https://www.consciousclothing.com/',
		ig: 'https://www.instagram.com/consciousclothing/',
		facebook: 'https://www.facebook.com/consciousclothing5104/',
	},
	{
		name: 'Danijo Hawkins Pottery',
		tags: ['pottery', 'x'],
		website: 'https://www.danijohawkinspottery.com/',
		ig: 'https://www.instagram.com/danijohawkinspottery/',
		facebook: 'https://www.facebook.com/danijohawkins/',
	},
	{
		name: 'Daughter of Trees',
		tags: ['clothing', 'x'],
		ig: 'https://www.instagram.com/daughter.of.trees/',
	},
	{
		name: 'Donna Vogtmann Pyrography',
		tags: ['mixed', 'x'],
	},
	{
		name: 'Fesitval Frames',
		tags: ['handmade frames', 'x'],
	},
	{
		name: 'Gemini Handmade',
		tags: ['leather', 'x'],
		website: 'https://www.geminihandmade.com/',
		ig: 'https://www.instagram.com/geminihandmadegr/',
		facebook: 'https://www.facebook.com/geminihandmadegr/',
	},
	{
		name: 'Goddess By Design',
		tags: ['body art', 'x'],
	},
	{
		name: 'Groundations Drums of Africa',
		tags: ['instruments', 'x'],
	},
	{
		name: 'Herbal Oasis Bodycare',
		tags: ['skincare', 'x'],
		website: 'https://www.herbaloasisbodycare.com/',
		facebook: 'https://www.facebook.com/herbaloasisbodycare/',
		ig: 'https://www.instagram.com/herbaloasisbodycare/',
	},
	{
		name: 'Howl at the Loom',
		tags: ['clothing', 'x'],
		website: 'https://www.howlattheloom.com/',
		facebook: 'https://www.facebook.com/TangledUpInTextiles/',
		ig: 'https://www.instagram.com/howlattheloom/',
	},
	{
		name: 'Jackalope Label',
		tags: ['jewelry', 'x'],
		website: 'https://www.jackalopelabel.com/',
		ig: 'https://www.instagram.com/jackalope.label/',
		facebook: 'https://www.facebook.com/p/Jackalope-Label-100088746641146/',
	},
	{
		name: 'Joshua Tree Skin Care',
		tags: ['skincare', 'x'],
	},
	{
		name: 'JWhite Original & Wild Child Botanical',
		tags: ['herbalcare', 'x'],
	},
	{
		name: 'Katie Did It',
		tags: ['glass', 'x'],
	},
	{
		name: 'Katzinn Illustrations',
		tags: ['illustrations', 'x'],
	},
	{
		name: 'Kilter Glass Art',
		tags: ['glass', 'x'],
	},
	{
		name: 'Kimberly Meyer Pottery',
		tags: ['pottery', 'x'],
	},
	{
		name: 'KZoo Creations',
		tags: ['woodowork', 'jewelry', 'x'],
		ig: 'https://www.instagram.com/kzoo_creations/',
		website: 'https://kzoocreations.com/',
		facebook: 'https://www.facebook.com/dan.pavlovich.5',
		etsy: 'https://www.etsy.com/shop/kzoocreationsshop/',
	},
	{
		name: 'L.A.M. Jewelry',
		tags: ['jewelry', 'x'],
		website: 'https://lamhandmadearts.com/',
		facebook: 'https://www.facebook.com/l.a.m.handmadearts/',
		ig: 'https://www.instagram.com/l.a.m.handmadearts/',
	},
	{
		name: 'Lex Luthier/Grosse Pointe Strings',
		tags: ['instruments', 'x'],
	},
	{
		name: 'Lisa Boerema Art LLC',
		tags: ['x'],
	},
	{
		name: 'Mean Machine',
		tags: ['x'],
	},
	{
		name: 'Molly May Art',
		tags: ['pottery', 'x'],
	},
	{
		name: 'Montague Tileworks',
		tags: ['pottery', 'x'],
	},
	{
		name: "Moondrop's Art",
		tags: ['instruments', 'x'],
	},
	{
		name: 'Night Flight Images',
		tags: ['photography', 'x'],
	},
	{
		name: 'Oddment Apparel',
		tags: ['clothing', 'x'],
		website: 'https://www.oddmentapparel.com/',
		ig: 'https://www.instagram.com/oddment_apparel/',
	},
	{
		name: 'Rowan Grey',
		tags: ['clothing', 'x'],
		website: 'https://www.rowangrey.net/',
		ig: 'https://www.instagram.com/rowangreyclothing/',
		etsy: 'https://www.etsy.com/shop/rowangreyclothing/',
	},
	{
		name: 'Schyler the Potter',
		tags: ['pottery', 'x'],
	},
	{
		name: 'Sleepyheads',
		tags: ['x'],
	},
	{
		name: 'Stilarts',
		tags: ['painting', 'x'],
	},
	{
		name: 'Sweetgrass Ties And Dyes LLC',
		tags: ['clothing', 'x'],
		facebook:
			'https://www.facebook.com/p/Sweetgrass-Ties-and-Dyes-by-Janet-McFarland-100057022046949/',
	},
	{
		name: 'Sweetwater Ceramics',
		tags: ['pottery', 'x'],
	},
	{
		name: "Swirl Haggard's 'Ope Rope Emporium",
		tags: ['clothing', 'x'],
		facebook:
			'https://www.facebook.com/p/Swirl-Haggards-Ope-Rope-Emporium-100091474632754/',
		ig: 'https://www.instagram.com/swirlhaggards_operope_emporium/',
		etsy: 'https://www.etsy.com/shop/operopes/',
	},
	{
		name: 'Tamarack Creek Soap & Gifts',
		tags: ['skincare', 'x'],
	},
	{
		name: 'The Henna Den',
		tags: ['body art', 'x'],
	},
	{
		name: 'The Rusted Rabbit',
		tags: ['jewelry', 'x'],
		website: 'https://www.therustedrabbitgr.com/',
		ig: 'https://www.instagram.com/therealrustedrabbit/',
		facebook: 'https://www.facebook.com/therustedrabbit/',
	},
	{
		name: 'The Spoon Girl',
		tags: ['jewelry', 'x'],
		ig: 'https://www.instagram.com/The_spoon_girl/',
		facebook: 'https://www.facebook.com/TheSpoonGirl/',
		website: 'https://www.thespoongirl.com/',
	},
	{
		name: 'The Woodchuckery',
		tags: ['woodwork', 'x'],
	},
	{
		name: 'Toe Togs',
		tags: ['clothing', 'x'],
	},
	{
		name: 'West Michigan Henna Collective',
		tags: ['body art', 'x'],
	},
	{
		name: 'Whimsy Brims',
		tags: ['clothing', 'x'],
		ig: 'https://www.instagram.com/whimsybrims/',
		facebook: 'https://www.facebook.com/p/Whimsy-Brims-100090343533552/',
		etsy: 'https://www.etsy.com/shop/WhimsyBrimss/',
	},
	{
		name: 'Windblown Glass',
		tags: ['glass', 'x'],
	},
	{
		name: 'Yana Dee',
		tags: ['clothing', 'x'],
		website: 'https://yanadee.com/',
		ig: 'https://www.instagram.com/yanadeeshop/',
		facebook: 'https://www.facebook.com/yanadeeshop/',
	},
];
export default vendors;
