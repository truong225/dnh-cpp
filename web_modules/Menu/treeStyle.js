"use strict"

export default {
  tree: {
    base: {
      listStyle: "none",
      backgroundColor: "transparent",
      margin: 0,
      padding: 0,
      color: "#242a31",
      fontFamily: "lucida grande ,tahoma,verdana,arial,sans-serif",
      fontSize: "14px",
    },
    node: {
      base: {
        position: "relative",
      },
      link: {
        cursor: "pointer",
        position: "relative",
        padding: "0px 5px",
        display: "block",
      },
      activeLink: {
        background: "rgba(64, 120, 192, .1)",
        boxShadow: "inset -2px 0 #1abc9c",
      },
      toggle: {
        base: {
          position: "relative",
          display: "inline-block",
          verticalAlign: "top",
          marginLeft: "-5px",
          height: "24px",
          width: "24px",
        },
        wrapper: {
          position: "absolute",
          top: "50%",
          left: "50%",
          margin: "-7px 0 0 -7px",
          height: "14px",
        },
        height: 14,
        width: 14,
        arrow: {
          fill: "rgba(26, 187, 156, 0.5)",
          strokeWidth: 0,
        },
      },
      header: {
        base: {
          display: "inline-block",
          verticalAlign: "top",
          color: "#242a31",
        },
        connector: {
          width: "2px",
          height: "12px",
          borderLeft: "solid 2px black",
          borderBottom: "solid 2px black",
          position: "absolute",
          top: "0px",
          left: "-21px",
        },
        titleLv0: {
          fontSize: "1.5em",
          fontWeight: 300,
          fontFamily: "Source Sans Pro,sans-serif",
          marginBottom: "1em",
        },
        title: {
          lineHeight: "24px",
          verticalAlign: "middle",
        },
        titleNull: {
          color: "rgba(51, 51, 51, 0.5)",
          cursor: "no-drop",
        },
      },
      subtree: {
        listStyle: "none",
        paddingLeft: "19px",
      },
      loading: {
        color: "#E2C089",
      },
    },
  },
}
