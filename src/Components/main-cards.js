function MainCard(props){
    return(
        <div className={`main-card ${props.bg}`}>
        <div className=" flex items-center justify-center gap-1 font-bold pb-6">
            <span className={props.IconColor}>
                {props.icon} 
            </span>
            <span>@abcd</span>
        </div>
        <div>
            <h2 className="text-slate-800 dark:text-white text-6xl">1987</h2>
            <p className="font-medium uppercase tracking-[0.3em]">Followers</p>
        </div>
        <div className={`flex items-center justify-center text-maingreen gap-1 pt-6 ${props.RiColor}` }>
            <span>
                {props.RiIcon}
            </span>
            <span>
                today
            </span>
        </div>
        </div>
    );
}
export default MainCard;