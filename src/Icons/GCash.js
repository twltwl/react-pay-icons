import * as React from "react";

const SvgGCash = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg
      viewBox="0 0 60 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M60 0H0v40h60V0z" fill="#0085FE" />
      <path
        d="M19.375 31.462c-.061-.03-.123-.018-.184-.018h-1.765c-.05 0-.097.003-.148 0-.184-.015-.333-.145-.344-.33a5.835 5.835 0 010-.614c.011-.184.16-.311.348-.326.043-.003.086 0 .13 0h2.77c.05 0 .097.004.148.004.173 0 .394.141.437.387.015.08.011.16.008.242-.004.105-.018.21-.015.315.004.46-.116.893-.286 1.316a3.288 3.288 0 01-1.435 1.653 4.296 4.296 0 01-1.71.582 3.259 3.259 0 01-.593.007c-.518-.029-1.02-.127-1.49-.354-1.179-.572-1.928-1.494-2.17-2.792-.152-.82-.087-1.638.286-2.397.578-1.19 1.519-1.938 2.831-2.177a4.012 4.012 0 012.228.206c.593.235 1.099.593 1.504 1.088.047.058.094.116.134.178a.367.367 0 01-.098.51c-.029.021-.061.04-.094.057-.155.09-.315.174-.466.268a.4.4 0 01-.528-.105c-.38-.499-.897-.77-1.508-.864a2.61 2.61 0 00-1.215.08c-.911.296-1.475.921-1.678 1.862-.098.455-.083.914.058 1.36.264.827.824 1.373 1.649 1.626.987.304 1.858.047 2.614-.629a1.89 1.89 0 00.59-1.074c0-.025-.008-.043-.008-.061zM25.436 26.895c.987-.004 1.797.271 2.506.839a3.274 3.274 0 01.708.78c.083.149.05.315-.097.406a17.23 17.23 0 01-.706.412c-.148.083-.289.043-.394-.09a.947.947 0 01-.043-.062c-.409-.55-.962-.839-1.638-.904a2.702 2.702 0 00-1.049.094c-.9.282-1.45.897-1.652 1.812-.109.484-.094.976.065 1.45.31.922.947 1.475 1.91 1.634.466.08.925.054 1.37-.116a2.064 2.064 0 001.001-.766l.054-.076c.09-.105.206-.138.333-.09.04.014.08.036.116.057.188.109.376.214.564.322.025.015.054.03.08.047.133.098.166.246.09.394-.022.044-.054.084-.083.123-.557.767-1.313 1.237-2.231 1.429-.8.17-1.591.1-2.354-.196-1.11-.43-2.076-1.493-2.307-2.806-.149-.842-.102-1.67.264-2.455.542-1.164 1.442-1.895 2.704-2.166.286-.054.575-.072.789-.072zM43.895 29.155c.04-.03.069-.05.098-.076a2.432 2.432 0 011.392-.503c.322-.018.643 0 .954.094.756.228 1.248.727 1.505 1.472.094.278.14.564.151.857.008.202.004.409.004.615v2.545c0 .055 0 .112-.004.167-.01.166-.119.274-.285.282-.13.003-.26 0-.39 0s-.261.003-.391 0c-.214-.004-.315-.105-.326-.319-.003-.043 0-.086 0-.13v-2.527c0-.167-.003-.337-.01-.503a1.753 1.753 0 00-.156-.647c-.217-.47-.582-.727-1.1-.756a1.64 1.64 0 00-.44.033c-.358.086-.622.289-.803.61-.13.232-.192.482-.214.746-.007.105-.007.21-.007.314v2.734c0 .054.004.112-.003.166-.018.166-.13.275-.293.279-.271.003-.546-.004-.817.003-.145.004-.304-.137-.297-.296.004-.05 0-.098 0-.148v-7.138c0-.07-.004-.138.004-.203a.285.285 0 01.25-.257c.053-.007.111-.003.166-.003.216 0 .433.007.65 0 .221-.007.34.148.337.332-.004.156 0 .311 0 .467v1.634c0 .04-.015.09.025.156zM37.274 32.619h.39c.178-.004.294.069.348.242.08.246.253.405.484.51.25.116.514.134.781.105.13-.015.257-.044.376-.098a.701.701 0 00.243-.17c.148-.162.191-.466-.055-.658a1.35 1.35 0 00-.325-.177 5.021 5.021 0 00-.6-.188c-.333-.09-.67-.174-.995-.3a3.102 3.102 0 01-.625-.322c-.8-.531-.85-1.645-.33-2.278.185-.224.41-.394.666-.524a2.766 2.766 0 011.013-.279c.448-.04.89-.01 1.32.138.596.202 1.026.585 1.24 1.19.04.108.068.224.09.34.047.245-.083.397-.329.397s-.495 0-.741-.004c-.185-.003-.272-.061-.326-.242-.112-.376-.387-.546-.748-.6a1.658 1.658 0 00-.626.029c-.08.021-.152.05-.224.09-.297.166-.354.56-.061.788.09.07.188.12.289.163.184.076.372.134.564.188.29.083.582.166.871.26.254.084.496.192.72.34.325.217.568.503.662.886.17.695-.026 1.273-.572 1.729-.282.235-.614.369-.969.448a3.256 3.256 0 01-1.811-.105 2.288 2.288 0 01-1.067-.748 1.828 1.828 0 01-.369-.821c-.025-.184.123-.333.271-.333h.445v.004zM35.575 28.956c0-.036 0-.076-.004-.112-.022-.181-.16-.279-.296-.275-.279.004-.557-.004-.836.004-.163.003-.264.1-.282.264-.007.061-.007.122-.007.184v.499l-.04.01c-.014-.032-.032-.06-.047-.093a1.463 1.463 0 00-.296-.402 1.899 1.899 0 00-.778-.451 2.737 2.737 0 00-1.938.133c-.734.33-1.218.9-1.479 1.653a3.578 3.578 0 00-.029 2.3c.174.556.474 1.037.926 1.406.672.55 1.443.741 2.296.564.448-.094.828-.322 1.164-.625l.163-.152c.022-.018.054-.011.054.018.004.043.004.087.008.13 0 .094-.004.184 0 .278.01.214.119.315.329.319.173.003.347 0 .52 0 .094 0 .185.003.279 0 .159-.008.264-.105.289-.26.007-.044.004-.087.004-.13v-5.262zm-1.555 3.399c-.232.586-.644.965-1.273 1.07-.564.098-1.056-.068-1.44-.499a1.97 1.97 0 01-.484-1.142 2.117 2.117 0 01.152-1.056c.101-.235.242-.445.434-.619.647-.585 1.819-.546 2.416.319.173.256.27.542.307.846.014.105.014.21.022.314a2.113 2.113 0 01-.134.767z"
        fill="#fff"
      />
      <path
        d="M19.78 14.051c0-.18-.007-.362.004-.539.01-.191.04-.38.058-.571.018-.21.05-.416.094-.622a9.248 9.248 0 01.777-2.296c.25-.506.557-.98.893-1.432a8.703 8.703 0 011.1-1.208 8.924 8.924 0 015.521-2.354c.166-.01.333-.025.499-.029.376-.003.752.03 1.128.065a8.605 8.605 0 012.466.64 9.498 9.498 0 012.076 1.219c.137.112.228.26.293.423a1.036 1.036 0 01-.452 1.27c-.351.19-.713.19-1.06-.022-.177-.109-.34-.25-.517-.362a6.811 6.811 0 00-2.455-1.013c-.268-.05-.535-.083-.806-.112a7.324 7.324 0 00-.63-.029c-.289-.003-.578.033-.867.066-.279.032-.55.086-.818.155a6.712 6.712 0 00-1.844.77 6.905 6.905 0 00-.85.597c-.278.235-.546.48-.784.763-.21.246-.405.499-.593.76-.08.111-.152.223-.217.346-.22.409-.434.821-.579 1.266-.126.387-.22.784-.289 1.186-.094.56-.08 1.125-.058 1.685.011.271.065.539.12.806.137.651.358 1.273.672 1.863.18.34.398.654.626.965.278.376.604.705.95 1.016.348.307.727.575 1.132.806.416.24.85.43 1.306.575.358.116.727.196 1.099.257.528.09 1.06.08 1.591.058.29-.01.575-.065.86-.12.373-.075.731-.184 1.085-.318a6.37 6.37 0 001.114-.55c.217-.13.427-.27.626-.43.184-.148.401-.227.633-.23a.972.972 0 01.61.187c.297.217.47.51.46.886a.96.96 0 01-.275.669 3.608 3.608 0 01-.51.401 8.995 8.995 0 01-2.282 1.146 6.725 6.725 0 01-1.222.308c-.202.029-.401.083-.604.098-.21.014-.415.054-.629.047-.224-.008-.444 0-.669 0a7.142 7.142 0 01-1.178-.105 8.977 8.977 0 01-1.617-.409 8.968 8.968 0 01-1.609-.763 10.768 10.768 0 01-1.034-.72c-.13-.1-.253-.216-.376-.328-.112-.105-.22-.218-.333-.326a8.16 8.16 0 01-1.215-1.493 9.169 9.169 0 01-.82-1.602 9.151 9.151 0 01-.489-1.747c-.04-.231-.061-.466-.09-.698-.029-.293-.015-.582-.022-.871z"
        fill="#002CC4"
      />
      <path
        d="M31.687 13.02h1.747c.116 0 .235 0 .35.033.438.123.767.528.764 1.023a5.738 5.738 0 01-4.39 5.561c-.6.145-1.208.192-1.826.138-1.414-.13-2.622-.701-3.613-1.714a5.48 5.48 0 01-1.547-3.048c-.271-1.754.14-3.338 1.29-4.7.832-.984 1.896-1.596 3.157-1.86a5.969 5.969 0 011.682-.1 5.597 5.597 0 012.564.853c.524.332.575.933.397 1.32a1.056 1.056 0 01-1.558.426 3.569 3.569 0 00-2.148-.517 3.627 3.627 0 00-3.283 2.831c-.449 2.05.867 3.855 2.618 4.314a3.635 3.635 0 004.35-2.296l.007-.018c.05-.152.036-.148-.101-.148h-2.174c-.13 0-.26-.004-.386-.04a1.037 1.037 0 01-.77-1.038 1.04 1.04 0 01.842-.998c.098-.018.199-.018.296-.018.579 0 1.158 0 1.732-.004 0 .004 0 .004 0 0z"
        fill="#fff"
      />
      <path
        d="M41.223 14.066v.296c-.004.322-.033.64-.065.962-.018.21-.047.42-.08.625-.029.185-.05.37-.09.55a12.526 12.526 0 01-1.07 3.117 1.276 1.276 0 01-.221.322.984.984 0 01-.745.314c-.372.004-.658-.162-.86-.462-.225-.333-.232-.688-.062-1.042.12-.253.239-.503.343-.763a9.24 9.24 0 00.507-1.609c.047-.231.104-.46.137-.69.04-.275.069-.554.094-.829.029-.34.025-.68.029-1.02 0-.314-.032-.628-.065-.943a9.996 9.996 0 00-.33-1.689 9.09 9.09 0 00-.69-1.76c-.08-.16-.13-.326-.133-.5a1.01 1.01 0 01.314-.77.978.978 0 01.72-.3c.394.01.72.174.91.539.091.17.174.343.254.517.217.474.398.962.553 1.457.163.514.282 1.038.373 1.57.057.328.083.661.133.99.004.011.004.025.004.036.01.366.062.723.04 1.082zM37.878 14.087c-.018.318-.036.63-.065.944a8.474 8.474 0 01-.268 1.44c-.112.419-.256.827-.434 1.221-.018.04-.036.08-.05.12a1.045 1.045 0 01-1.537.473c-.362-.235-.597-.788-.39-1.258a7.086 7.086 0 00.593-2.061c.036-.315.068-.626.065-.944a8.067 8.067 0 00-.098-1.106 6.964 6.964 0 00-.532-1.754 1.017 1.017 0 01.08-1.027.983.983 0 01.792-.456 1.02 1.02 0 01.756.253.92.92 0 01.253.337c.166.354.307.716.42 1.092.097.325.184.654.245.99.043.24.076.474.105.716.036.344.05.68.065 1.02z"
        fill="#76C1FB"
      />
    </svg>
  );

export default SvgGCash;
