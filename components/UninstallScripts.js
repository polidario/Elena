/*************************************************************************
 * 
 *  This file is created on lesson: Creating Script Tags
 *  From Course: Shopify App Development with Node, React, REST API & GraphQL
 *
 * ***********************************************************************/

import React, { useState } from 'react';
import { Banner, Form, FormLayout, TextField, Button } from '@shopify/polaris';

const InstallScript = () => {
    const [active, setActive] = useState(false);

    // We need to create this state so we can specify which script tag to delete
    const [id, setID] = useState('');

    const handleSubmit = (_event) => { 
        //console.log(id);
        fetch(`/uninstallScriptTag?id=${id}`)
            .then(
                    (resp) => { 
                        //console.log(scriptTag); 
                        setActive(true);
                        setID('');
                    }
                );
    };

    const handleScriptTagID = (value) => setID(value);

    if(active) {
        return (
            <Banner
                title="You have uninstalled the script"
                status="success"
            />
        )
    } else {
        return (
            <Form onSubmit={handleSubmit}>
                <FormLayout>
                    <TextField
                        value={id}
                        onChange={handleScriptTagID}
                        label="Script Tag ID"
                        type="number"
                    />

                    <Button submit>Submit</Button>
                </FormLayout>
            </Form>
        )
    } 
}

export default InstallScript;