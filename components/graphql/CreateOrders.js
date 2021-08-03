import { Button, Form, FormLayout, TextField } from '@shopify/polaris';
import React, { useState } from 'react';

const CreateOrder = () => {
    const [title, setTitle] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);

    const handleSubmit = () => {
        fetch(`/createDraftOrder?title=${title}&quantity=${quantity}&price=${price}`)
        .then(
            resp => { 
                console.log(resp);
            }
        );
    }

    const handleTitleChange = (value) => {
        setTitle(value);
    };

    const handleQuantityChange = (value) => {
        setQuantity(value);
    };

    const handlePriceChange = (value) => {
        setPrice(value);
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <FormLayout>
                <TextField
                        value={title}
                        onChange={handleTitleChange}
                        label="Title"
                        type="text"
                    ></TextField>
                    <TextField
                        value={quantity}
                        onChange={handleQuantityChange}
                        label="Quantity"
                        type="number"
                    ></TextField>
                    <TextField
                        value={price}
                        onChange={handlePriceChange}
                        label="Price"
                        type="number"
                    ></TextField>
                    <Button submit>Submit</Button>
                </FormLayout>
            </Form>
        </>
    )
}

export default CreateOrder;