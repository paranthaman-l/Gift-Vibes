import { NavLink } from "react-router-dom"

const Themes = () => {
    const datas = [
        {
            image:"",
            title: "Fun in a Box",
            desc: "Exchange favorite board games for a super fun game night."
        },
        {
            image:"",
            title: "Something Blue",
            desc: "Gift anything blue, from cotton candy to denim."
        },
        {
            image:"",
            title: "Inside Jokes",
            desc: "Pay tribute to inside jokes with symbolic gifts."
        },
        {
            image:"",
            title: "Sweet Dreams",
            desc: "Gifts for a good night's sleep: pajamas, eye masks, etc."
        },
        {
            image:"",
            title: "Home Sweet Home",
            desc: "Exchange relics from your hometown and guess the gifter."
        },
        {
            image:"",
            title: "Pizza!",
            desc: "Any pizza-related items are fair game."
        },
        {
            image:"",
            title: "Gift Cards",
            desc: "Versatile presents that always fit."
        },
        {
            image:"",
            title: "Superheroes",
            desc: "Create a starter pack based on a superhero moniker."
        },
        {
            image:"",
            title: "Ugly Sweaters",
            desc: "Find the tackiest sweater for a fun exchange."
        },
        {
            image:"",
            title: "The Best Book I've Ever Read",
            desc: "Swap favorite books for some offline reading."
        },
        {
            image:"",
            title: "Booze Patrol",
            desc: "Over-21 indulgences paired with kitschy cups."
        },
        {
            image:"",
            title: "Cheap Thrills",
            desc: "Stretch a budget to assemble a bundle."
        },
        {
            image:"",
            title: "One-Season Wonders",
            desc: "Box sets of TV series that were canceled too soon."
        },
        {
            image:"",
            title: "I Love the '80s",
            desc: "Gifts embracing the colorful '80s era."
        },
        {
            image:"",
            title: "Feets of Strength",
            desc: "Gifts related to foot care: socks, polish, etc."
        },
        {
            image:"",
            title: "A Few of My Favorite Things",
            desc: "Gifts based on personal favorites with explanations."
        },
        {
            image:"",
            title: "Snack Attack",
            desc: "Fill a box with unique snacks for the recipient."
        },
        {
            image:"",
            title: "My Mom Loves This Stuff",
            desc: "Gifts endorsed by your mom."
        },
        {
            image:"",
            title: "Spot the Great Gift",
            desc: "Gifts with a polka dot theme."
        },
        {
            image:"",
            title: "Bring Back the Mixtape",
            desc: "Create a personalized soundtrack for the recipient."
        },
        {
            image:"",
            title: "Sheet (Mask) Happens",
            desc: "Skincare-themed gifts: sheet masks, lotions, etc."
        },
        {
            image:"",
            title: "Denim",
            desc: "Gifts made of or related to denim."
        },
        {
            image:"",
            title: "Deskorations",
            desc: "Tchotchkes for the recipient's desk."
        },
        {
            image:"",
            title: "A Salute to 1997",
            desc: "Gifts related to movies from 1997."
        },
        {
            image:"",
            title: "Premium Brew",
            desc: "Coffee-themed gifts: mugs, beans, etc."
        },
        {
            image:"",
            title: "Three Wicks or Bust",
            desc: "Candles for the gift exchange."
        },
        {
            image:"",
            title: "Get Out of Town",
            desc: "Travel-themed gifts."
        },
        {
            image:"",
            title: "Something Fishy",
            desc: "Gifts related to fish or ocean themes."
        },
        {
            image:"",
            title: "Make Your Mother Blush",
            desc: "NSFW gifts not suitable for mom."
        },
        {
            image:"",
            title: "Sweet for Swedes",
            desc: "Gifts related to Sweden."
        },
        {
            image:"",
            title: "Piece it Together",
            desc: "Swap puzzles of preferred piece counts."
        },
        {
            image:"",
            title: "Something Old",
            desc: "Exchange items lying around the house."
        },
        {
            image:"",
            title: "Candy Crush",
            desc: "Exchange favorite sweets."
        },
        {
            image:"",
            title: "Made with Love",
            desc: "Challenge everyone to DIY their gifts."
        }
    ]

    return (
        <div className='px-10 w-3/4  h-[650px] overflow-y-scroll'>
            <div className="flex justify-between items-center">
                <p className='text-4xl font-semibold tracking-wider text-textGray'>Theme</p>
                <NavLink to={"/addTheme"} className='text-xl cursor-pointer font-semibold tracking-wider text-textGray hover:underline'>Add Theme</NavLink>
            </div>
            <div className="">
                {datas.map((data, i) => {
                    return (
                        <div key={i} className="shadow-md rounded-lg p-10 m-5 flex">
                            <img className="h-20 w-20 mr-10" src="https://demo2.themelexus.com/flicko/wp-content/uploads/2024/01/product-n11-1-460x460.webp" alt="" />
                            <div className="">
                                <p className="text-2xl font-semibold">{data.
                                title}</p>
                                <p className="mt-3">{data.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Themes