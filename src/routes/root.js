import Layout from "../components/Layout";
import PageContainer from "../pages/PageContainer";
import {useEffect} from "react";

type Props = {
    viewStore: Object,
    uiStore: Object,
}

export const Root = (props: Props) => {
    useEffect(() => {
        // viewStore.getNetworkInfo();
        // const intervalId = setInterval(() => viewStore.getNetworkInfo(), 30000);
        // return () => clearInterval(intervalId);
    }, []);

    return (
        <Layout>
            <PageContainer/>
        </Layout>
    )
}