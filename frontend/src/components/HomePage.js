import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import homePageLogo from "./images/HomePageLogo.png";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Image centered src={homePageLogo} />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Curabitur
          pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
          turpis et commodo pharetra, est eros bibendum elit, nec luctus magna
          felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
          Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a
          elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est
          euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum
          consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis
          sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam
          faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed
          malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam
          arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet
          et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu,
          feugiat in, orci. In hac habitasse platea dictumst. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla
          gravida orci a odio. Nullam varius, turpis et commodo pharetra, est
          eros bibendum elit, nec luctus magna felis sollicitudin mauris.
          Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus
          vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut
          ullamcorper, ligula eu tempor congue, eros est euismod turpis, id
          tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec
          fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet
          nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut
          dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus
          eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam
          consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium
          ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in,
          orci. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
          Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec
          luctus magna felis sollicitudin mauris. Integer in mauris eu nibh
          euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec
          lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor
          congue, eros est euismod turpis, id tincidunt sapien risus a quam.
          Maecenas fermentum consequat mi. Donec fermentum. Pellentesque
          malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget,
          consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis
          nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras
          mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur
          augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna
          nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse
          platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Curabitur
          pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
          turpis et commodo pharetra, est eros bibendum elit, nec luctus magna
          felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
          Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a
          elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est
          euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum
          consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis
          sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam
          faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed
          malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam
          arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet
          et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu,
          feugiat in, orci. In hac habitasse platea dictumst. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla
          gravida orci a odio. Nullam varius, turpis et commodo pharetra, est
          eros bibendum elit, nec luctus magna felis sollicitudin mauris.
          Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus
          vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut
          ullamcorper, ligula eu tempor congue, eros est euismod turpis, id
          tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec
          fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet
          nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut
          dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus
          eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam
          consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium
          ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in,
          orci. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
          Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec
          luctus magna felis sollicitudin mauris. Integer in mauris eu nibh
          euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec
          lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor
          congue, eros est euismod turpis, id tincidunt sapien risus a quam.
          Maecenas fermentum consequat mi. Donec fermentum. Pellentesque
          malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget,
          consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis
          nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras
          mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur
          augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna
          nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse
          platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Curabitur
          pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
          turpis et commodo pharetra, est eros bibendum elit, nec luctus magna
          felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
          Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a
          elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est
          euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum
          consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis
          sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam
          faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed
          malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam
          arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet
          et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu,
          feugiat in, orci. In hac habitasse platea dictumst.
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(HomePage);
