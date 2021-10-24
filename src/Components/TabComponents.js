import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Tab1 from './TabNavs/Tab1';
import Tab2 from './TabNavs/Tab2';
import Tab3 from './TabNavs/Tab3';
import "./TabNavs/Tab.css"
import TabContents1 from './TabContents/TabContents1';
import TabContents2 from './TabContents/TabContents2';
import TabContents3 from './TabContents/TabContents3';
const TabComponents = () => {
    const [stae, setStae] = useState(0)

    return (
        <div>
            <Tabs>
                <TabList>
                    <div className="nv">
                        <Tab onClick={() => setStae(0)} className={`${stae === 0 ? "active as" : "null"}`}><Tab1 /></Tab>
                        <Tab onClick={() => setStae(1)} className={`${stae === 1 ? "active as" : "null"}`}><Tab2 /></Tab>
                        <Tab onClick={() => setStae(2)} className={`${stae === 2 ? "active as" : "null"}`}><Tab3 /></Tab>
                    </div>
                </TabList>

                <TabPanel>
                    <TabContents1 />
                </TabPanel>
                <TabPanel>
                    <TabContents2 />
                </TabPanel>
                <TabPanel>
                    <TabContents3 />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabComponents;