/*************************************************************************
 * 
 *  This file is created on lesson: Creating Script Tags
 *  From Course: Shopify App Development with Node, React, REST API & GraphQL
 *
 * ***********************************************************************/

// We need to import React to create this component
import React from 'react';
// The following components are used to create the user interface for this component
import { Page, Layout } from '@shopify/polaris';
// InstallScript component
import InstallScript from '../components/InstallScripts'; 
// UninstallScript component
import UninstallScript from '../components/UninstallScripts'; 

class ScriptTags extends React.Component {
    render() {
        return (
            <Page>
                <Layout.AnnotatedSection
                    title="Install Scripts"
                    description="Install scripts by clicking the button">
                        <InstallScript></InstallScript>
                </Layout.AnnotatedSection>

                <Layout.AnnotatedSection
                    title="Uninstall Scripts"
                    description="Uninstall scripts by providing a specific script tag ID and clicking the submit button">
                        <UninstallScript></UninstallScript>
                </Layout.AnnotatedSection>
            </Page>
        )
    }
}

export default ScriptTags;