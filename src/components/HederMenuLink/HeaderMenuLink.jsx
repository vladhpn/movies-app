export const HeaderMenuLink = (card) => {
    return ( 
        <a href="/" className=" flex items-center text-white mr-4 rounded bg-purple-500 p-2 hover:bg-zinc-700 text-xl "> <span  className="mr-1">{card.icon}</span> <span>{card.lable}</span></a>
        
    )
}



