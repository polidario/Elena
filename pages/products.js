/*************************************************************************
 * 
 *  This file is created on lesson: Creating Script Tags
 *  From Course: Shopify App Development with Node, React, REST API & GraphQL
 *
 * ***********************************************************************/

import { Card, Layout, Page } from '@shopify/polaris';
import React from 'react';
import ProductList from '../components/ProductList';

class Products extends React.Component {
    state = {
        items: []
    }
    componentDidMount() {
        fetch('/getProducts').then(
                (res) => res.json()
            ).then(items => { 
                this.setState({items})
            });
    }

    render() {
        let products = this.state.items.products;
        return(
            <Page>
                <Layout.AnnotatedSection
                    title="Products"
                    description="List of products in this section">
                        <ProductList products={products}></ProductList>
                </Layout.AnnotatedSection>
            </Page>
        );
    }
}

export default Products;