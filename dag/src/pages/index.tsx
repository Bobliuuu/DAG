"use client";
import Head from "next/head";
import Link from "next/link";
import AnimatedText from "../components/AnimatedText";
import AnimatedButtons from "~/components/AnimatedButtons";
import AnimatedButtonsSearch from "~/components/AnimatedButtonsSearch";
import ImageSearchBox from "~/components/ImageSearchBox";
import SearchBar from "~/components/SearchBar";
export default function Home() {
  const dataset = {
    "bird_dataset": {
      "links": ["https://ipfs.io/ipfs/bafybeiefa3s7fveh77rtvak6v7tmzcljlf2kdebdi6ariu4ee75d2w3f4e/duck.png", "https://ipfs.io/ipfs/bafybeicrunsto7pspok37ejsdk7wvhb3kowlyicrfb2rdxmdgzxfqmtiza/fisher.png", "https://ipfs.io/ipfs/bafybeic4ucnajbc4jt3cfalxjkyyj4umh24ebdwao3ggocflibndjuibu4/eagle.png", "https://ipfs.io/ipfs/bafybeidcuyqdsfk6opqph3nlkhysn45j3hcyxywhhef4z3bt6n4ehi6fka/gull.png", "https://ipfs.io/ipfs/bafybeigm4widladno5pasbxtg2jubzxbukluwbid4ofmpbr6khprpjauhq/crane.png", "https://ipfs.io/ipfs/bafybeiccdpbr5swhscavqfjz5tj5ta6hr2tcnbpy4yffkm43czxfotpdf4/geese.png", "https://ipfs.io/ipfs/bafybeiez6ekn56bso2burgufckqrviqjeyuxt54piglvjezfgfn6e6dowy/orange.png"],
      "labels": ["bird1", "bird2", "bird3", "bird4", "bird5", "bird6", "bird7"],
      "nft": ["bafybeiefa3s7fveh77rtvak6v7tmzcljlf2kdebdi6ariu4ee75d2w3f4e", "bafybeicrunsto7pspok37ejsdk7wvhb3kowlyicrfb2rdxmdgzxfqmtiza", "bafybeic4ucnajbc4jt3cfalxjkyyj4umh24ebdwao3ggocflibndjuibu4", "bafybeidcuyqdsfk6opqph3nlkhysn45j3hcyxywhhef4z3bt6n4ehi6fka", "bafybeigm4widladno5pasbxtg2jubzxbukluwbid4ofmpbr6khprpjauhq", "bafybeiccdpbr5swhscavqfjz5tj5ta6hr2tcnbpy4yffkm43czxfotpdf4", "bafybeiez6ekn56bso2burgufckqrviqjeyuxt54piglvjezfgfn6e6dowy"]
  },
  "board_dataset": {
      "links": ["https://ipfs.io/ipfs/bafybeig7znljejqqf7aehizesfrr6cmlnftne455wlb5gwx5snrlwz3kya/board7.jpg", "https://ipfs.io/ipfs/bafybeigvhumw6s333z6nvwtpowpmu6rcrelwckbwqmvlxmbrjaih7fqjbq/board1.jpg", "https://ipfs.io/ipfs/bafybeidbfhwlozpvq3h2t4chk5ak6bds5c2pqvjdxzqd7qww3vrqmeplje/board6.jpg", "https://ipfs.io/ipfs/bafybeiaqx5rts5auaxm6kypjk6ihknoucuxp64fg5nfafsvhf4po7mdezm/board4.jpg", "https://ipfs.io/ipfs/bafybeifmnscxln4n6g4lnnmgnevrvpclmbqhtwmqzwwmnkrt7u4pnl2cni/board3.jpg", "https://ipfs.io/ipfs/bafybeidosxuu5rna4f5xpmvpgrmi425b3ro5mllc7hona7hmmgtpqq6wty/board5.jpg", "https://ipfs.io/ipfs/bafybeiba4p5yhcphjvqwxhygeydek6a5ggl2wt65ykrqdmaw5xhwxmqs7u/board2.jpg"],
      "labels": ["board1", "board2", "board3", "board4", "board5", "board6", "board7"],
      "nft": ["bafybeig7znljejqqf7aehizesfrr6cmlnftne455wlb5gwx5snrlwz3kya", "bafybeigvhumw6s333z6nvwtpowpmu6rcrelwckbwqmvlxmbrjaih7fqjbq", "bafybeidbfhwlozpvq3h2t4chk5ak6bds5c2pqvjdxzqd7qww3vrqmeplje", "bafybeiaqx5rts5auaxm6kypjk6ihknoucuxp64fg5nfafsvhf4po7mdezm", "bafybeifmnscxln4n6g4lnnmgnevrvpclmbqhtwmqzwwmnkrt7u4pnl2cni", "bafybeidosxuu5rna4f5xpmvpgrmi425b3ro5mllc7hona7hmmgtpqq6wty", "bafybeiba4p5yhcphjvqwxhygeydek6a5ggl2wt65ykrqdmaw5xhwxmqs7u"]
  },
  "map_dataset": {
      "links": ["https://ipfs.io/ipfs/bafybeicvvj2gjtn35pazsccanjpghirdnnpubuajdkncnpeo5qtaaw6fzu/map1.jpg", "https://ipfs.io/ipfs/bafybeihlavllqmvaj5cb7ljlocqcwcclpsyrpnctysw6orp3dcdcl64ta4/map3.jpg", "https://ipfs.io/ipfs/bafybeibsq54kbo2vjf7jnuoya7ypzbvamtbfe67ngolewnkedd4gfazrxa/map6.jpg", "https://ipfs.io/ipfs/bafybeifhncoz4gvp4xprqnm2ukmhfgsnehdpghb6wii4l5mbzoopxbx7eq/map5.jpg", "https://ipfs.io/ipfs/bafybeiadazi54z4fgpdz6trwuon5lim2hvtrwq56mfpxf2druhwklubjla/map2.jpg", "https://ipfs.io/ipfs/bafybeibjq7hlgq2e7ssrvdu22zws6y7gbzohqkzd5bmxkd542fh4o444ai/map4.jpg", "https://ipfs.io/ipfs/bafybeic5dj6256ryge2ft6nd2cii7q2mrrqp6ixi55lvvrfyxqregyjq4u/map7.jpg"],
      "labels": ["map1", "map2", "map3", "map4", "map5", "map6", "map7"],
      "nft": ["bafybeicvvj2gjtn35pazsccanjpghirdnnpubuajdkncnpeo5qtaaw6fzu", "bafybeihlavllqmvaj5cb7ljlocqcwcclpsyrpnctysw6orp3dcdcl64ta4", "bafybeifhncoz4gvp4xprqnm2ukmhfgsnehdpghb6wii4l5mbzoopxbx7eq", "bafybeiadazi54z4fgpdz6trwuon5lim2hvtrwq56mfpxf2druhwklubjla", "bafybeibjq7hlgq2e7ssrvdu22zws6y7gbzohqkzd5bmxkd542fh4o444ai", "bafybeic5dj6256ryge2ft6nd2cii7q2mrrqp6ixi55lvvrfyxqregyjq4u"]
  }
};
const birdLinks = dataset.bird_dataset.links;
const boardLinks = dataset.board_dataset.links;
const mapLinks = dataset.map_dataset.links;
  return (
    <>
    
      <div className="bg-landing flex-col-2 flex h-[100vh] items-center justify-center gap-11 bg-black bg-cover bg-no-repeat text-white">
        <div className="flex flex-col justify-center items-center space-y-8">

          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Power your <span className="text-[hsl(244,100%,70%)]">ML</span>{" "}
            models.
          </h1>
          <AnimatedText
            sentence="Get data, processing power, and storage from other members."
            styling="text-xl font-extralight"
            horizontal={false}
          />
          <div className = "flex justify-center flex-row gap-7">
          <AnimatedButtons
            sentence="DASHBOARD"
            styling="text-xl text-center flex w-[200px] h-[60px]  bg-gradient-to-r from-purple-400 to-purple-950 rounded-full shadow-lg"
            link="/dashboard"
          />
          <AnimatedButtons
            sentence="READ DOCS"
            styling="text-xl text-center flex w-[200px] h-[60px]  bg-gray-950 rounded-full shadow-lg"
            link=""
          />
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className="bg-black flex-col-2 flex h-[60vh] items-center justify-center gap-11 bg-black bg-cover bg-no-repeat text-white">
        <div className="fkex justify-between w-full max-w-xl px-10">
      <AnimatedText
            sentence="Leverage your storage and processing space."
            styling="text-5xl font-extralight mb-4"
            horizontal={false}
          />
          </div>
          <div className="grid grid-cols-2 gap-12 max-w-xl">
            <div>
              <div className="flex items-start flex-row">
                <div className="h-7 w-1 bg-blue-500 mr-3"></div>
            <AnimatedText
            sentence="Get Paid Fast"
            styling="text-3xl"
            horizontal={false}
          /></div>
              <p className= "font-light">Make money while giving up some of your processing to help people improve and train their models!</p>
            </div>
            <div>
              <div className="flex items-start flex-row">
                <div className="h-7 w-1 bg-yellow-500 mr-3"></div>
            <AnimatedText
            sentence="Compute"
            styling="text-3xl"
            horizontal={false}
          /></div>
              <p className= "font-light">Gain access to a vast array of datasets crowdsourced by others in the DAG community!</p>
            </div>
            <div>
              <div className="flex items-start flex-row">
                <div className="h-7 w-1 bg-green-500 mr-3"></div>
            <AnimatedText
            sentence="Decentralized Storage"
            styling="text-3xl"
            horizontal={false}
          /></div>
              <p className= "font-light">Store models and leverage the processing space provided on DAG</p>
            </div>
            <div>
              <div className="flex items-start flex-row">
                <div className="h-7 w-1 bg-purple-500 mr-3"></div>
            <AnimatedText
            sentence="Train Fast"
            styling="text-3xl"
            horizontal={false}
          /></div>
              <p className= "font-light">Don't have a powerful device? DAG solves that problem!</p>
            </div>
          </div>
      
      </div>
      <div className="bg-warped flex-col-2 flex h-[70vh] items-center justify-center bg-cover bg-no-repeat gap-11 bg-cover text-white">
     
      <div className="flex items-center justify-between flex-col gap-y-3">
      <SearchBar/>
        <div className="flex flex-row items-center justify-center gap-4 pt-4 text-center">
          <AnimatedButtonsSearch
            sentence="ALL DATASETS"
            styling="text-white"
            link=""
          />
          <AnimatedButtonsSearch
            sentence="IRIS DATA"
            styling="text-white"
            link=""
          />
          <AnimatedButtonsSearch
            sentence="PRE-TRAINED MODEL"
            styling="text-white"
            link=""
          />
          <AnimatedButtonsSearch
            sentence="RENEWABLE ENERGY"
            styling="text-white"
            link=""
          />
          <AnimatedButtonsSearch
            sentence="LOAN PREDICTION DATA"
            styling="text-white"
            link=""
          />

<AnimatedButtons
  sentence="ADD DATASET"
  styling="text-xl text-center flex w-[180px] h-[40px] bg-white text-black rounded-full shadow-lg"
  link=""
/>

        </div>
        <div className="flex flex-row items-center justify-center gap-4 pt-4 text-center">
            <ImageSearchBox
    styling="rounded-xl w-[300px] h-[180px] border-2 border-white text-center flex max-w-xl bg-black shadow-lg"
    opacity="opacity-5"
    link={birdLinks[0] || ""}
/><ImageSearchBox
    styling="rounded-xl w-[300px] h-[180px] border-2 border-white text-center flex max-w-xl bg-black shadow-lg"
    opacity="opacity-5"
    link={boardLinks[1] || ""}
/><ImageSearchBox
    styling="rounded-xl w-[300px] h-[180px] border-2 border-white text-center flex max-w-xl bg-black shadow-lg"
    opacity="opacity-5"
    link={mapLinks[2] || ""}
/>

        </div>
      </div>
      
      </div>
      
    </>
  );
}