/*************************************************************************
 * 
 *  This file is created on lesson: Creating Script Tags
 *  From Course: Shopify App Development with Node, React, REST API & GraphQL
 *
 * ***********************************************************************/

import React, { useState } from 'react';
import { Card, ResourceList, Thumbnail, ResourceItem, TextStyle, Modal, TextContainer } from '@shopify/polaris';

// We'll add props param for this component and this parameter will have all of 
// the products from our products page (products.js)
const ProductList = (props) => {
    const { products } = props;

    const [active, setActive] = useState(false);
    const [pid, setID] = useState(0);

    const handleChange = () => setActive(!active);

    const deleteTitle = `Delete the product with an ID of ${pid}`;

    // We have to check if the products variable is empty because the value for this variable is coming from
    // a state variable and that state variable is first empty then gets updated after the fetch() function.
    if(!products || products.length === 0) {
        return <Card sectioned><p>No products available</p></Card>
    }
    return (
        <>
            <Modal
                open={active}
                onClose={handleChange}
                title={deleteTitle}
                primaryAction={{
                    content: 'Delete',
                    onAction: () => {
                        fetch(`/deleteProduct?id=${pid}`).then(response => console.log(response));
                    },
                }}
                secondaryActions={[
                {
                    content: 'Cancel',
                    onAction: handleChange,
                },
                ]}
            >
                <Modal.Section>
                    <TextContainer>
                        <p>
                        Are you sure you wish to delete this item?
                        </p>
                    </TextContainer>
                </Modal.Section>
            </Modal>
            <Card>
                <ResourceList
                    resourceName={{singular: 'product', plural: 'products'}}
                    items={products}
                    renderItem={(product) => {
                    const {id, title, body_html} = product;
                    //console.log(product);

                    const url = product.image != null ? product.image.src : '';
                    const media = <Thumbnail source={url} alt={title} />;

                    return (
                        <ResourceItem
                            id={id}
                            media={media}
                            accessibilityLabel={`View details for ${title}`}
                            shortcutActions= {{
                                content: 'Delete',
                                onAction: () => {
                                    setID(id);
                                    handleChange();
                                },
                                }}
                            >
                            <h3>
                                <TextStyle variation="strong">{title}</TextStyle>
                            </h3>
                        </ResourceItem>
                    );
                    }}
                />
            </Card>
        </>
    )
} 

export default ProductList;