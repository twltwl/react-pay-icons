import * as React from "react";

const SvgGmr = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#372D2C" fillRule="nonzero" />
        <path d="M22.885 23.604a12.23 12.23 0 001.27-1.915 12.82 12.82 0 01-1.289 1.932.228.228 0 00.019-.017zm-15.868-3.91a9.732 9.732 0 01-.228-4.48l-.005-.01a9.755 9.755 0 00.761 5.911c.421.89.945 1.726 1.562 2.492a.241.241 0 00.028.024 12.5 12.5 0 01-1.584-2.516 10.01 10.01 0 01-.534-1.421zm17.963 0a9.731 9.731 0 00-.002 0h.002zM9.43 18.53l.136-.067.12-.058a15.16 15.16 0 00-.256.125z" />
        <path
          d="M9.965 18.487l.101-.075h-.034l-.466.43a1.43 1.43 0 01.4-.355z"
          fill="#000"
          fillRule="nonzero"
        />
        <path
          d="M26.95 13.44a.359.359 0 00-.215-.154 38.333 38.333 0 00-1.04-.24l.094-.464.06-.292.028-.148.027-.16a1.34 1.34 0 00-.077-.704 1.485 1.485 0 00-1.133-.922 12.127 12.127 0 00-.344-1.492l-.017-.06-2.486-3.02-.093-.027c-.101-.027-2.341-.689-5.39-.69l.034-.602a1.236 1.236 0 00-.4-2.41 1.236 1.236 0 00-.4 2.409l.035.605c-3.062.003-5.314.661-5.41.693l-.093.027-2.486 3.02-.016.06c-.146.49-.261.987-.344 1.49h-.008l-.176.044a1.447 1.447 0 00-1.012 1.579l.027.159.028.148.06.292.094.466c-.345.076-.69.154-1.034.238a.357.357 0 00-.215.154.341.341 0 00.374.506c.336-.082.672-.16 1.009-.233l.025.128a10.4 10.4 0 00.506 7.55C8.47 24.608 11.94 28.078 16 28.078c4.059 0 7.53-3.47 9.042-6.693a10.405 10.405 0 00.495-7.552l.024-.118c.338.074.676.152 1.013.234a.341.341 0 00.374-.506l.002-.003zM15.112 3.298a.982.982 0 01.968-.979c.54 0 .54 1.953 0 1.958a.982.982 0 01-.968-.979zm.648 1.21c.079.015.158.023.238.023h.038l.076 2.102a.339.339 0 01-.032.444.341.341 0 01-.242.1c-.506 0-.913-.154-.913-.34 0-.172.342-.315.79-.339l.123-.003h.034l-.112-1.987zM8.156 9.345l.291-.104.495-.165.65-.192c.236-.072.5-.138.775-.21l.874-.197c.303-.06.616-.127.94-.182.325-.055.65-.099.98-.154.33-.055.66-.082.984-.12.325-.04.644-.056.957-.083.165-.015.334-.022.495-.028h.017l.385 3.427.39-3.456h.418c.248 0 .479-.011.682 0l.528.022.462.016-.456-.044-.528-.05c-.204-.021-.43-.027-.682-.043a12.232 12.232 0 00-.809-.033H16c-.284 0-.59-.017-.902-.006-.311.011-.638.006-.968.028l-1.001.066c-.336.027-.671.055-1.001.099-.33.044-.655.093-.963.132-.297.037-.59.094-.866.143l-.492-.039.979-1.336 4.889-1.066.03.53c-.66.052-1.155.271-1.155.534 0 .3.65.544 1.452.544.802 0 1.452-.243 1.452-.544 0-.263-.495-.482-1.155-.534l.03-.528 4.868 1.063.98 1.336-1.362.11-.025-.003.015.004h-.02l2.607 1.292s1.124 3.61-.425 6.678a6.92 6.92 0 01-.615.99s-2.406 1.111-6.105 1.307L16 17.532a2.2 2.2 0 00.885-.154l.77-.253c1.564-.482 3.13-.957 4.697-1.424l.154-.044.05-.143.05-.143.038-.138.071-.27c.126-.53.216-1.068.27-1.611l.044-.55.01-.275v-.28l.006-.286-.027-.286-.044-.286a2.53 2.53 0 00-.072-.275l-.044-.143-.05-.171-.035-.005-.014-.044-.05-.171-.197-.027a51.61 51.61 0 00-4.89-.336l-.17-.005-.072.143-.896 1.756-.484.008-.53.01-.96-1.72-.05-.093-.1.006c-.813.045-1.625.111-2.436.198a37.84 37.84 0 00-2.414.335h.016-.01l-.034.11a1.367 1.367 0 00-.024.086c.016-.065.035-.129.055-.196a2.416 2.416 0 01-.11.259c-.018.07-.038.139-.051.209l-.01.027-.06.27-.044.269-.028.275c-.01.182-.016.369-.01.55l.021.55c.037.55.11 1.098.22 1.639l.06.27.078.275.022.066.077.027 3.113 1.023c.916.298 1.831.605 2.744.919.078.016.157.027.237.033l.055.005h.016l.028.006.115.005h.017l-.254 1.035a20.88 20.88 0 01-2.72-.098c-2.222-.298-3.684-.83-4.064-.981a11.786 11.786 0 01-.808-8.143zm11.8 1.53l-2.941 5.545-.197.37-.143.049a1.767 1.767 0 01-.533.104 1.908 1.908 0 01-.825-.099l-.1-.038.126-.235 3.08-5.8.139-.263c.5.022 1.012.061 1.534.105l-.14.262zm.904.09l.144-.272.423.039.402.044.05.005h.032l-.148.28-2.44 4.598-.2.377-1.144.363.197-.373 2.684-5.061zm-14.35 1.27l-.016-.148-.011-.143a.984.984 0 01.719-1.014 12.129 12.129 0 00.42 4.873l-.045-.014a1.155 1.155 0 01-.704-.704 1.862 1.862 0 01-.082-.424l-.248-2.126-.033-.3zm2.754 11.453l-.015-.012.007.01a.366.366 0 01-.15-.082 12.468 12.468 0 01-1.562-2.489 9.755 9.755 0 01-.76-5.911l.004.01a1.254 1.254 0 00.85.644c.213.702.489 1.383.825 2.035l.05.088.093.044c.352.144.711.27 1.076.379h.009l-.026.008a3.25 3.25 0 00-.239.091 4.841 4.841 0 00-.196.087l-.424.203-.137.066-.017.138a7.425 7.425 0 00.306 3.108c.155.499.373.976.649 1.42l.005.01.017.044c.024.111-.19.156-.365.11zm3.78 2.212a6.01 6.01 0 01-2.079-1.291 4.95 4.95 0 01-.863-1.129 5.709 5.709 0 01-.528-1.32 7.205 7.205 0 01-.215-1.408 6.105 6.105 0 01.039-1.25l.258-.103c.265-.087.533-.164.803-.23l.413-.083c.357-.06.716-.103 1.078-.127h.043l.016.002a7.518 7.518 0 00-.46 2.63c0 1.79.59 3.313 1.527 4.328l-.032-.019zm4.3-1.143a2.714 2.714 0 01-1.358.352 2.72 2.72 0 01-1.408-.385 3.37 3.37 0 01-.512-.727 2.536 2.536 0 003.782.067 3.282 3.282 0 01-.504.694v-.001zm-1.358-.418a1.96 1.96 0 01-1.969-1.952v-.007a1.96 1.96 0 111.97 1.958v.001zM18.474 22a2.523 2.523 0 00-4.988.084 6.816 6.816 0 01-.055-.683 2.729 2.729 0 012.557-1.733h.01a2.729 2.729 0 012.527 1.683 6.924 6.924 0 01-.051.65zm.432 3.931h.01l-.02.007c.95-1.016 1.55-2.549 1.55-4.353a7.477 7.477 0 00-.461-2.63h.014c1.415.204 2.152.93 2.152.93s.15 4.146-3.243 6.046h-.002zm6.463-8.94v.214c0 .049-.004.097-.005.145a6.913 6.913 0 01-.018.328c0 .034-.006.069-.009.103-.006.071-.012.143-.02.213 0 .016-.003.032-.005.048a9.836 9.836 0 01-.025.206v.01l-.028.198v.007a9.731 9.731 0 01-.958 2.96l-.034.066c-.035.067-.07.135-.107.202a12.313 12.313 0 01-1.27 1.915.343.343 0 01-.144.082l.006-.01-.015.012c-.173.05-.394.007-.37-.11l.017-.044.01-.01c.273-.446.49-.922.645-1.42a7.535 7.535 0 00.302-3.102l-.016-.137-.138-.066c-.143-.072-.28-.143-.423-.204l-.435-.176-.039-.014.01-.003c.363-.107.72-.235 1.069-.381l.093-.044.05-.088c.335-.652.61-1.332.822-2.032.375-.077.695-.317.873-.655.105.562.16 1.133.165 1.705a1.343 1.343 0 00-.003.082z"
          fill="#FFF"
          fillRule="nonzero"
        />
        <path
          d="M9.646 11.135l.231-.28h.077-.115c-.116.17-.258.333-.385.5.073-.074.13-.143.192-.22z"
          fill="#000"
          fillRule="nonzero"
        />
        <path
          d="M16.95 6.21c.484.127.803.358.803.627 0 .27-.324.5-.803.627.66-.06 1.155-.319 1.155-.627s-.495-.569-1.155-.627zm-1.591 2.472a.254.254 0 00.254-.25.253.253 0 00-.075-.18.244.244 0 00-.18-.07.248.248 0 00-.245.25c0 .138.11.25.246.25zm-6.645.842a.252.252 0 00-.176.43c.047.047.11.072.176.07a.252.252 0 00.176-.43.237.237 0 00-.176-.07zm.693 8.073a.252.252 0 00.176-.43.237.237 0 00-.176-.07.252.252 0 00-.25.25c.005.14.115.25.25.25zm6.072.957a.252.252 0 00.176-.43.237.237 0 00-.176-.07.255.255 0 00-.25.255.263.263 0 00.25.245zm1.365-9.867a.254.254 0 00.254-.25.253.253 0 00-.075-.18.244.244 0 00-.18-.07.248.248 0 00-.245.25c0 .139.11.25.246.25zm-.122 9.373a.254.254 0 00-.25.25c.01.137.117.245.25.25a.252.252 0 00.176-.43.237.237 0 00-.176-.07zm-6.777 1.683a.232.232 0 00-.218.116.263.263 0 00-.006.258c.044.08.126.129.214.125h.01a.25.25 0 00.245-.25.25.25 0 00-.066-.172.242.242 0 00-.18-.077zm1.509-.451a.248.248 0 00-.246.25c0 .138.11.25.246.25a.254.254 0 00.254-.25.253.253 0 00-.075-.18.244.244 0 00-.18-.07zm9.296 0a.25.25 0 10.019.5.25.25 0 00-.02-.5z"
          fill="#FFF"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );

export default SvgGmr;
