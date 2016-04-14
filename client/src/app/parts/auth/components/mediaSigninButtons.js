import _ from 'lodash';
import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';
import config from 'config';

export default React.createClass({
    getDefaultProps() {
        return {
            socialAuth: _.extend({}, config.socialAuth),
            onAuthenticated: () => {}
        };
    },

    render() {
        let {socialAuth} = this.props;

        return (
            <div className="media-signin-buttons">
                {socialAuth.facebook && this.renderFacebook()}
                {socialAuth.fidor && this.renderFidor()}
            </div>
        );
    },

    renderFacebook(){
        return (<RaisedButton
                  className="btn-signup"
                  label="Sign in with Facebook"
                  linkButton={true}
                  href="/api/v1/auth/facebook"
                  icon={<FontIcon className="icon-facebook"/>}
                />);
    },
    renderFidor(){
        return (<RaisedButton
                  className="btn-signup"
                  label="Sign in with Fidor"
                  linkButton={true}
                  href="/api/v1/auth/fidor"
                />);
    }
} );
