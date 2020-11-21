/*************************************************************************
 * 
 *  This file is created on lesson: Creating Script Tags
 *  From Course: Shopify App Development with Node, React, REST API & GraphQL
 *
 * ***********************************************************************/


// We need to import React to create this component and useState for create state variables
import React, { useState } from 'react';
// The following components are used to create the user interface for this component
import { Banner, SettingToggle, TextStyle } from '@shopify/polaris';

const InstallScript = () => {
    // Here we created the state.
    // active is the variable and setActive is the function to update the value of active state variable.
    // To learn more about useState, check React official documentation:
    // https://reactjs.org/docs/hooks-state.html
    const [active, setActive] = useState(false);

    // This function is used by the SettingToggle component
    // This function will trigger the route /installScriptTags which is created in our server.js file
    const handleToggle = () => { 
        fetch('/installScriptTags').then(resp => { console.log(resp); setActive((active) => !active); })
    };
    
    // The contentStatus variable don't really need to be in a condition like below
    // because once we click the Install button the banner will be rendered.
    const contentStatus = active ? 'Uninstall' : 'Install';

    // The textStatus is just a variable used to dynamically change the text of TextStyle component
    // Its value will depend on the value of active variable. If active state is true, then the text is installed.
    // Otherwise, not installed.
    const textStatus = active ? 'installed' : 'not installed';

    // If the active state is true, then we render the banner.
    // This way, users won't be able to click the button again.
    if(active) {
        return (
            <Banner
                title="You have installed the script"
                status="success"
            />
        )
    } else {
        // If active state is false, then we render the SettingToggle component so users can trigger the handleToggle()
        // function.
        return (
            <>
                <SettingToggle
                    action={{
                        content: contentStatus,
                        onAction: handleToggle,
                    }}
                    enabled={active}
                >
                    The script is <TextStyle variation="strong">{textStatus}</TextStyle>.
                </SettingToggle>
            </>
        )
    } 
}

//We're going to export this component so we can use this in our install_scripts.js (Look at ./pages/install_scripts.js)
export default InstallScript;