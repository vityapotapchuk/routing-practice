import {useRouterStore} from "../store";

function Menu(){
    const {routes, defaultRouter, setRouter} = useRouterStore((state) => state)

    return (
        <div style={{display: "flex", justifyContent: "space-between"}}>
            {routes.map(router =>
                <div key={router.id}
                     onClick={() => setRouter(router.id)}
                     style={{color: defaultRouter === router.id ? "blue" : "white"}}
                >
                    {router.menu}
                </div>
            )}
        </div>
    )
}

export default Menu