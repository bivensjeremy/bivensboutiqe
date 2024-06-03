import { Suspense } from "react";
import Banner from "../components/(store)/Banner";
import StoreSuspense from "../components/(store)/StoreSuspense";
const layout = ({children}) => {
    return (
        <div>
            <Banner />
            
            <section className="bg-neutral text-foreground">
                <div className="sm:p-10 m-auto text-justify">
                    <Suspense fallback={
                        <StoreSuspense />
                    }>
                        {children}
                    </Suspense>
                </div>
            </section>
            
        </div>
    );
}

export default layout;