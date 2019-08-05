'use strict';

module.exports = () => {
    var img_repo = process.env.BUCKET || 'serverless-cat-detector-img-repo-sigma';
    var results_table = process.env.TABLE || 'ServerlessCatDetectorStatusSigma';

    return {
        serverless_cat_detector_img_repo: img_repo,
        serverless_cat_detector_results_table: results_table
    };
};
