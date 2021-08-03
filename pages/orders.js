import React from 'react';
import { Layout, Page } from '@shopify/polaris';
import CreateOrder from '../components/graphql/CreateOrders';

class Orders extends React.Component {
    render() {
        return(
            <Page>
                <Layout.AnnotatedSection
                    title="Order"
                    description="Create a new order"
                >
                    <CreateOrder></CreateOrder>
                </Layout.AnnotatedSection>
            </Page>
        )
    }
}

export default Orders;