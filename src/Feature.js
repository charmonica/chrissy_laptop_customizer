import React from 'react';
import slugify from 'slugify';
import FeatureOptions from './FeatureOptions.js';
import FeaturesStore from './featuresStore.js';

export default function Feature(props) {
    return Object.keys(FeaturesStore).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = FeaturesStore[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return <FeatureOptions key = {itemHash} id = {itemHash} feature={feature} format={props.format} itemHash={itemHash} option={item} selected={props.selected} updateFeature={props.updateFeature} />
        })
    return (
        <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
            <h3>{feature}</h3>
            </legend>
            {options}
        </fieldset>
    );
  });
};