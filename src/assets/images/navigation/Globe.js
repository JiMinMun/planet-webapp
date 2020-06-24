import React from "react";

function Globe(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill={props.color}
        d="M12 .563a12 12 0 1012 12 12 12 0 00-12-12zm7.742 10.427v.335a.75.75 0 01-.415.671l-.745.373a.749.749 0 01-.751-.047l-.881-.587a.751.751 0 00-.653-.088l-.128.043a.75.75 0 00-.387 1.127l.641.961a.749.749 0 00.624.334h.4a.75.75 0 01.75.75v.549a.751.751 0 01-.15.45l-.907 1.209a.754.754 0 00-.14.31l-.208 1.1a.752.752 0 01-.23.414 7.723 7.723 0 00-1.21 1.411l-.63.946a1.343 1.343 0 01-2.318-.144A3.818 3.818 0 0112 19.4v-1.442a.75.75 0 00-.75-.75H10a2.643 2.643 0 01-2.643-2.643v-.68a2.644 2.644 0 011.057-2.115l1.335-1a2.645 2.645 0 011.586-.529h.043a2.638 2.638 0 011.182.279l.712.356a.749.749 0 00.572.041l2.289-.763a.75.75 0 00-.237-1.461h-.488a.75.75 0 01-.53-.22l-.335-.335a.75.75 0 00-.53-.22h-4.36a.75.75 0 01-.75-.75v-.214a.75.75 0 01.568-.728l.7-.175a.751.751 0 00.442-.312L11 5.154a.749.749 0 01.624-.334H12.8a.75.75 0 00.75-.75V3.02a9.691 9.691 0 017.835 7.22h-.892a.75.75 0 00-.751.75z"
        data-name="Icon awesome-globe-africa"
        transform="translate(0 -.563)"
      ></path>
    </svg>
  );
}

export default Globe;