const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Meta-Meow";
const description = "1234";
const baseUri = "ipfs://1234";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 700,//1500/2=750
    layersOrder: [
      { name: "back",dir:"地面部队",options: {
        bypassDNA: false
      }},
      { name: "cat" ,dir:"地面部队"},
      { name: "glasses" ,dir:"地面部队"},
      { name: "clothes" ,dir:"地面部队"},
      { name: "part" ,dir:"地面部队"},
    ],
  },
  {
    growEditionSizeTo: 700+1500,//5184/3=1728
    layersOrder: [
      { name: "back",dir:"机甲冷色款",options: {
        bypassDNA: false
      }},
      { name: "part" ,dir:"机甲冷色款"},
      { name: "arm" ,dir:"机甲冷色款"},
      { name: "boddy" ,dir:"机甲冷色款"},
      { name: "shoulder" ,dir:"机甲冷色款"},
      { name: "head" ,dir:"机甲冷色款"},
    ],
  },
  {
    growEditionSizeTo: 700+1500+400,//432
    layersOrder: [
      { name: "back",dir:"机甲稀有款红色"},
      { name: "part" ,dir:"机甲稀有款红色"},
      { name: "arm" ,dir:"机甲稀有款红色"},
      { name: "boddy" ,dir:"机甲稀有款红色"},
      { name: "shoulder" ,dir:"机甲稀有款红色"},
      { name: "head" ,dir:"机甲稀有款红色"},
    ],
  },
  {
    growEditionSizeTo: 700 + 1500 + 400 + 400,//432
    layersOrder: [
      { name: "back",dir:"机甲稀有款紫色"},
      { name: "part" ,dir:"机甲稀有款紫色"},
      { name: "arm" ,dir:"机甲稀有款紫色"},
      { name: "boddy" ,dir:"机甲稀有款紫色"},
      { name: "shoulder" ,dir:"机甲稀有款紫色"},
      { name: "head" ,dir:"机甲稀有款紫色"},
    ],
  },
  {
    growEditionSizeTo: 700 + 1500 + 400 + 400 + 1400,//17280/2=8640
    layersOrder: [
      { name: "back",dir:"文职没帽子",options: {
        bypassDNA: false
      }},
      { name: "cat" ,dir:"文职没帽子"},
      { name: "clothes" ,dir:"文职没帽子"},
      { name: "eye" ,dir:"文职没帽子"},
      { name: "glasses" ,dir:"文职没帽子"},
      { name: "part" ,dir:"文职没帽子"},
      { name: "hair" ,dir:"文职没帽子"},
    ],
  },
  {
    growEditionSizeTo: 700 + 1500 + 400 + 400 + 1400 + 800,//1920/2=960
    layersOrder: [
      { name: "back",dir:"文职有帽子",options: {
        bypassDNA: false
      }},
      { name: "cat" ,dir:"文职有帽子"},
      { name: "clothes" ,dir:"文职有帽子"},
      { name: "eye" ,dir:"文职有帽子"},
      { name: "glasses" ,dir:"文职有帽子"},
      { name: "part" ,dir:"文职有帽子"},
    ],
  },
  {
    growEditionSizeTo: 700 + 1500 + 400 + 400 + 1400 + 800 + 800,//960
    layersOrder: [
      { name: "others",dir:"宇航"},
      { name: "tail" ,dir:"宇航"},
      { name: "clothes" ,dir:"宇航"},
      { name: "head" ,dir:"宇航"},
      { name: "part" ,dir:"宇航"},
    ],
  }
];
// const layerConfigurations = [
//   {
//     growEditionSizeTo: 5,
//     layersOrder: [
//       { name: "Background"},
//       { name: "Eyeball" },
//       { name: "Eye color" },
//       { name: "Iris" },
//       { name: "Shine" },
//       { name: "Bottom lid" },
//       { name: "Top lid" },
//     ],
//   },
// ];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 2008,
  height: 2008,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {creator: "Meta-Meow",};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
