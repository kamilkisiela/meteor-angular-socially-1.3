import angular from 'angular';

import { Meteor } from 'meteor/meteor';

const name = 'displayImageFilter';

function DisplayImageFilter(image) {
  if (!image) {
    return '';
  }

  return Meteor.absoluteUrl(`ufs/${image.store}/${image._id}/${image.name}`);
}

// create a module
export default angular.module(name, [])
  .filter(name, () => {
    return DisplayImageFilter;
  });
