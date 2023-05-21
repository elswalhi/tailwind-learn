import {RiArrowDownsFill,RiArrowUpFill} from "react-icons/ri" ;
function SmCH(){
    return (
        <h1 className="text-slate-800 font-bold dark:text-slate-300 text-3xl py-3">Overview - Today</h1>

    );
}
function SmallCard(props){
    return(
        <>
        <div >
            <div className="card-sm">
                <div>
                    <div className="flex justify-between">
                        <span>Static</span>
                        <span>{props.icon}</span>
                    </div>
                    <div className="flex justify-between pt-3 items-center">
                        <span className="text-slate-800 text-2xl dark:text-white ">10</span>
                        <span className="flex items-center text-maingreen">
                        <RiArrowUpFill/>
                        <span >300%</span>
                        </span>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default SmallCard;
export {SmCH};