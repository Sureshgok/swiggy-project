// import React from "react";

// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }
//   render() {
//     const { name, location, email } = this.props;
//     const { count } = this.state;
//     return (
//       <div className="userclass">
//         <h1>name:{name}</h1>
//         <h1>Count:{count}</h1>
//         <button
//           onClick={() => {
//             this.setState({ count: this.state.count + 1 });
//           }}
//         >
//           onclick
//         </button>
//         <h3>location:{location}</h3>
//         <h4>Email:{email}</h4>
//       </div>
//     );
//   }
// }
// // const style=StyleSheet.
// export default UserClass;
import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: {
        name: "suresh",
        location: "hyd",
        id: "123345",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("  https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userdata: json,
    });
    // console.log(json);
  }
  componentDidUpdate() {
    console.log("suresh");
  }
  componentWillUnmount() {
    console.log("123456987");
  }
  render() {
    const { login, id, location, avatar_url } = this.state.userdata;
    return (
      <div>
        <img src={avatar_url} style={{ width: 100 }}></img>
        <h2>name:{login}</h2>
        <h2>location:{location}</h2>
        <h2>id:{id}</h2>
      </div>
    );
  }
}
export default UserClass;
