import * as React from "react";

const SvgAch = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg width={60} height={40} xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fillRule="nonzero" fill="none">
        <path fill="#F3F6F9" d="M-1 0h61.538v40H-1z" />
        <path
          d="m18.729 14.69-.02-.009-.06.102-.559 1.03c-.519.958-1.038 1.917-1.559 2.876-.047.086-.047.113.059.116.33.01.661.028.992.049.088.006.127-.012.152-.113.274-1.131.555-2.26.834-3.39.054-.22.108-.44.16-.661ZM4.607 26.44c.213-.286.396-.592.59-.89A25106.053 25106.053 0 0 0 15.431 9.741a.248.248 0 0 1 .232-.13c4.653.002 9.307.003 13.96.001h.152c-.646.092-1.28.25-1.893.473a9.956 9.956 0 0 0-3.935 2.656 10.52 10.52 0 0 0-2.323 4.008 9.422 9.422 0 0 0-.457 3.118 7.003 7.003 0 0 0 1.95 4.882 6.358 6.358 0 0 0 3.312 1.787c.212.045.425.077.645.116a.244.244 0 0 1-.145.02H16.428c-.216 0-.259-.052-.217-.277l.792-4.336c.055-.295.06-.295-.225-.295-.628 0-1.255.002-1.883-.001a.185.185 0 0 0-.175.091c-1.053 1.541-2.107 3.081-3.163 4.62a.266.266 0 0 1-.243.136c-.627 0-1.254.006-1.882.012l-2.533.025c-.686.008-1.373.016-2.059.026a.266.266 0 0 1-.233-.087v-.148ZM33.812 16.358l.266-2.177.298-2.386c.059-.48.114-.962.18-1.442.012-.092-.013-.12-.089-.148a10.397 10.397 0 0 0-2.425-.57.044.044 0 0 1-.033-.021h8.033c.214 0 .255.055.22.277l-.489 3.227c-.16 1.06-.322 2.119-.484 3.179-.003.02-.003.04-.005.06l-1.001.002h-3.955l-.516-.001M42.522 16.352c.063-.418.128-.836.19-1.254.154-1.04.308-2.08.46-3.12.106-.71.214-1.421.315-2.133.014-.098.05-.13.145-.13.568-.002 1.135-.008 1.703-.014l2.212-.024c.52-.006 1.041-.01 1.562-.02.112-.003.134.035.117.143-.11.71-.216 1.42-.322 2.13l-.438 2.912c-.075.503-.148 1.007-.221 1.51-.055.002-.11.006-.165.007a2305.627 2305.627 0 0 1-3.261 0h-1.303l-.994-.007M38.642 20.56l-.392 2.594-.465 3.057-.048.317a.152.152 0 0 1-.152.143c-.036.002-.071.002-.107.002h-8.275v-.025c.178-.02.357-.038.535-.059a11.194 11.194 0 0 0 1.975-.371c.117-.036.23-.087.347-.12.109-.028.142-.097.161-.205.311-1.771.624-3.541.939-5.31.037-.035.083-.021.124-.021.356-.003.711-.003 1.067-.004h3.956l.335.001M47.606 20.565l-.3 1.972-.49 3.252c-.035.235-.072.47-.103.706-.012.1-.05.14-.151.14-1.803-.003-3.605-.004-5.408-.003-.132 0-.142-.012-.121-.151l.485-3.277c.13-.882.258-1.763.385-2.645h4.242l1.461.006"
          fill="#35715B"
        />
        <path
          d="M33.12 20.584a3.264 3.264 0 0 1-1.141.835 3.695 3.695 0 0 1-1.358.332 3.738 3.738 0 0 1-1.825-.345 3.53 3.53 0 0 1-1.136-.828 3.474 3.474 0 0 1-.16-4.546 3.556 3.556 0 0 1 2.188-1.305 3.707 3.707 0 0 1 3.64 1.337c.084.103.18.194.27.291l-.573.004c-.295 0-.591.006-.887-.002a1.77 1.77 0 0 0-.746.146 2.106 2.106 0 0 0-1.25 2.207 2.04 2.04 0 0 0 .79 1.43c.334.272.752.42 1.183.42.311-.003.623-.002.934-.002.027.001.054-.004.071.026"
          fill="#BDCFC7"
        />
        <path
          d="m51.536 17.939.19-.354c.147-.273.147-.275-.146-.37-.082-.027-.201-.017-.241-.073-.049-.067.02-.176.04-.266.016-.071-.014-.084-.073-.083a1.846 1.846 0 0 1-.295-.001c-.12-.015-.158.045-.15.151a.277.277 0 0 1-.22.312.795.795 0 0 0-.55.768c-.02.204.092.4.28.483.156.067.321.111.49.13.07.013.16.021.163.126.003.103-.077.135-.157.156a.44.44 0 0 1-.094.01.762.762 0 0 1-.563-.243c-.052-.05-.075-.052-.109.016-.08.16-.163.319-.25.476-.028.052-.028.086.025.12a1.1 1.1 0 0 0 .478.199c.113.012.144.044.112.166-.061.236-.053.239.18.239.263 0 .265 0 .284-.274a.124.124 0 0 1 .114-.136.897.897 0 0 0 .676-.607.559.559 0 0 0-.43-.82c-.12-.028-.241-.038-.361-.062-.049-.009-.108-.022-.115-.088a.141.141 0 0 1 .09-.144.277.277 0 0 1 .126-.029.73.73 0 0 1 .506.197m-2.81-1.578c.517-.003 1.033-.01 1.55-.01.769 0 1.539.003 2.307.005.26 0 .364.133.328.398-.134.976-.264 1.954-.396 2.93-.024.179-.046.358-.074.537a.383.383 0 0 1-.378.338l-2.994.003c-.106 0-.212-.003-.32-.004-.01-.072-.074-.054-.112-.064a1.962 1.962 0 0 1-1.056-.743 2.057 2.057 0 0 1-.42-1.201 2.11 2.11 0 0 1 .163-.943 2.063 2.063 0 0 1 1.345-1.196c.03-.009.055-.012.058-.05"
          fill="#35715B"
        />
        <path
          d="M48.727 16.36c-.004.037-.028.041-.057.05a2.066 2.066 0 0 0-1.346 1.197c-.126.297-.182.619-.163.941.009.435.156.856.42 1.202.257.36.63.621 1.056.742.038.01.102-.007.114.064l-1.144.01-1.461-.007c-.018-.079-.089-.059-.135-.071a1.86 1.86 0 0 1-.842-.496 2.183 2.183 0 0 1-.076-2.991c.255-.282.585-.485.95-.587.033-.01.076-.002.079-.056h1.958c.055 0 .11-.004.165-.006l.482.009"
          fill="#467D68"
        />
        <path
          d="M43.54 20.559h-1.326c-.009-.074-.074-.056-.113-.066a1.84 1.84 0 0 1-.89-.53 2.187 2.187 0 0 1-.043-2.968c.253-.278.58-.48.942-.581.032-.01.076 0 .08-.054l.332-.008.994.006c-.005.07-.065.053-.1.063a1.985 1.985 0 0 0-.978.628 2.104 2.104 0 0 0-.483 1.78c.12.819.726 1.483 1.53 1.68.03.007.052.014.055.05"
          fill="#689280"
        />
        <path
          d="M40.911 20.557h-1.326c-.003-.037-.028-.04-.056-.05a3.147 3.147 0 0 1-.356-.128 2.113 2.113 0 0 1-1.148-2.315 2.025 2.025 0 0 1 1.446-1.638c.04-.013.103.005.114-.065h1.303c-.004.045-.039.041-.068.051a2.091 2.091 0 0 0-1.483 2.44c.114.79.689 1.436 1.46 1.64.04.012.103-.007.114.065"
          fill="#779E8D"
        />
        <path
          d="M33.026 16.359c.19 0 .381-.003.572-.003l.214.002h.516c-.003.056-.048.046-.079.056a2.045 2.045 0 0 0-1.024.686 2.075 2.075 0 0 0-.431 1.791 2.04 2.04 0 0 0 1.478 1.612c.032.01.076 0 .08.055-.356.001-.712.001-1.068.004-.042 0-.086-.014-.124.02l-.04.002c-.016-.03-.044-.025-.07-.026-.004-.045-.036-.042-.068-.05a1.972 1.972 0 0 1-1.171-.83 2.083 2.083 0 0 1-.348-1.526 2.06 2.06 0 0 1 1.282-1.672c.093-.04.211-.022.28-.121"
          fill="#A7C1B6"
        />
        <path
          d="M39.585 16.36c-.01.072-.075.053-.114.065a2.024 2.024 0 0 0-1.446 1.64 2.113 2.113 0 0 0 1.148 2.314c.116.05.235.093.356.128.028.01.053.013.056.05l-.943.002h-.336c-.003-.047-.036-.043-.067-.052-.413-.099-.783-.33-1.053-.659a2.081 2.081 0 0 1-.466-1.779 2.006 2.006 0 0 1 1.45-1.644c.039-.012.103.007.113-.066l1.001-.001.301.002"
          fill="#81A696"
        />
        <path
          d="M40.911 20.557c-.01-.072-.074-.053-.113-.065a1.988 1.988 0 0 1-1.46-1.64 2.091 2.091 0 0 1 1.482-2.44c.03-.01.064-.006.068-.051h1.302c-.004.054-.048.044-.08.053a2.018 2.018 0 0 0-.942.58 2.185 2.185 0 0 0 .043 2.97c.24.258.55.441.89.529.039.01.104-.008.113.066h-.311l-.991-.002"
          fill="#709886"
        />
        <path
          d="M13.44 29.75c.152-.394.292-.755.428-1.117.027-.071.059-.104.137-.1.133.007.267.005.402 0 .064-.002.088.023.097.089.1.703.203 1.406.307 2.109.013.084-.004.117-.093.112a2.748 2.748 0 0 0-.379 0c-.086.006-.105-.035-.114-.111-.039-.351-.082-.702-.124-1.052a.21.21 0 0 0-.036-.123l-.46 1.151a.198.198 0 0 1-.266.132c-.049-.016-.049-.062-.063-.097-.143-.369-.283-.738-.425-1.108l-.044-.11c-.053.378-.103.72-.148 1.064-.033.252-.03.252-.278.252h-.165c-.172 0-.173 0-.145-.17l.33-2.043c.01-.066.031-.1.105-.095.13.007.26.007.39 0 .077-.004.11.026.136.1.116.33.238.66.358.99.012.033.026.066.05.126M19.483 29.938c0-.446.005-.856-.003-1.267-.003-.119.036-.146.138-.138.119.007.237.007.356 0 .069-.002.095.016.095.095-.003.708-.003 1.416 0 2.124 0 .072-.022.098-.088.09h-.012c-.16.024-.322.017-.478-.02-.128-.064-.204-.243-.301-.372-.246-.327-.49-.654-.735-.984-.038.031-.02.071-.02.104-.002.387-.004.774 0 1.16.001.084-.017.118-.103.113a4.997 4.997 0 0 0-.403-.001c-.06.002-.082-.018-.082-.084.003-.712.003-1.424 0-2.136 0-.074.026-.09.09-.088.126.003.253.006.379 0a.197.197 0 0 1 .188.092c.304.415.614.826.922 1.238l.057.074"
          fill="#36735D"
        />
        <path
          d="M42.715 29.434c0 .456-.003.875.002 1.294.001.093-.023.12-.111.115a4.107 4.107 0 0 0-.379-.001c-.062.002-.09-.011-.09-.087.003-.711.003-1.423.001-2.135 0-.061.012-.095.078-.085h.035c.156-.024.314-.016.466.022.125.062.198.238.292.364l.742.994c.039-.037.021-.076.021-.109.002-.382.005-.765-.001-1.148-.002-.106.029-.132.125-.125.125.008.252.004.379 0 .054 0 .075.017.075.077-.002.72-.002 1.44 0 2.16 0 .053-.015.073-.068.072a12.195 12.195 0 0 0-.461 0c-.06.001-.081-.04-.11-.078l-.9-1.207-.096-.123"
          fill="#35715B"
        />
        <path
          d="M40.678 29.66a.629.629 0 0 0-.621-.622.638.638 0 0 0-.617.618.655.655 0 0 0 .625.68.645.645 0 0 0 .613-.675m-.618 1.25a1.22 1.22 0 0 1-1.16-1.65 1.16 1.16 0 0 1 .916-.782 1.23 1.23 0 1 1 .244 2.432M27.65 29.654a.627.627 0 1 0 1.248-.003.624.624 0 0 0-1.248.003m.623 1.257a1.232 1.232 0 0 1-1.1-1.797 1.25 1.25 0 0 1 1.302-.646c.512.07.92.464 1.006.974a1.198 1.198 0 0 1-1.208 1.47"
          fill="#36735D"
        />
        <path
          d="M32.373 29.371c0-.247.002-.493-.002-.74-.001-.076.021-.1.094-.097.134.005.268.005.402 0 .074-.004.093.02.093.096-.004.386-.003.774 0 1.16 0 .082.006.164.018.245a.368.368 0 0 0 .731.025c.014-.08.022-.163.022-.245.002-.395.003-.79 0-1.184-.001-.076.017-.1.092-.097a5.7 5.7 0 0 0 .413 0c.062-.002.083.02.082.083-.006.498.014.996-.015 1.493 0 .35-.235.654-.573.742a1.31 1.31 0 0 1-.781-.004.756.756 0 0 1-.56-.737c-.012-.246-.003-.493-.003-.74h-.013"
          fill="#35715B"
        />
        <path
          d="m7.933 29.25-.232.721h.461l-.229-.722m1.14 1.592h-.565a.06.06 0 0 1-.06-.048l-.011-.035c-.04-.103-.053-.248-.125-.297-.08-.053-.214-.018-.324-.02a2.705 2.705 0 0 1-.307-.003c-.118-.014-.165.042-.201.147-.09.257-.095.256-.36.256-.082 0-.166-.004-.248.001-.085.006-.101-.017-.068-.103.127-.335.249-.673.373-1.01.136-.368.274-.736.406-1.105.01-.06.068-.1.128-.09.154.005.307.002.461 0 .053 0 .087.008.108.068.263.734.527 1.469.793 2.203a.166.166 0 0 1 0 .036M5.243 29.3c0 .315 0 .315.258.28a.283.283 0 0 0 .208-.436.408.408 0 0 0-.42-.12c-.103.037-.023.143-.046.214a.226.226 0 0 0 0 .062m-.585.385v-1.049c0-.055-.007-.103.074-.103.32.005.64-.008.958.01.28-.01.531.172.609.442a.885.885 0 0 1-.152.9.622.622 0 0 1-.438.185c-.118.009-.237.01-.355.003-.086-.005-.118.018-.114.114.008.176-.002.354.004.53.004.093-.015.134-.115.126a2.52 2.52 0 0 0-.354 0c-.09.006-.121-.02-.12-.12.007-.346.003-.692.003-1.038M46.01 30.91a1.41 1.41 0 0 1-.735-.22c-.058-.036-.064-.067-.031-.126.059-.106.115-.216.166-.326.03-.068.055-.086.118-.03a.68.68 0 0 0 .335.172c.046.01.094.013.141.01a.239.239 0 0 0 .235-.188c.02-.134-.065-.195-.165-.236-.1-.04-.202-.068-.303-.102a.582.582 0 0 1-.474-.686.726.726 0 0 1 .576-.689c.28-.043.565.003.816.131.057.026.066.056.037.113a4.629 4.629 0 0 0-.16.33c-.03.066-.054.058-.104.023a.472.472 0 0 0-.403-.093.179.179 0 0 0-.154.164.171.171 0 0 0 .125.175c.091.038.185.069.28.1.393.128.561.34.542.684a.739.739 0 0 1-.625.766.807.807 0 0 1-.217.027M25.984 29.13a.62.62 0 0 0-.376-.15.28.28 0 0 0-.177.055.153.153 0 0 0-.006.258c.038.028.08.05.125.067.09.033.18.063.27.091a.698.698 0 0 1 .385 1.065.745.745 0 0 1-.673.388 1.281 1.281 0 0 1-.8-.213c-.055-.034-.068-.064-.033-.125.063-.113.121-.23.178-.347.026-.054.046-.063.093-.022.097.09.216.153.344.182.054.013.11.016.164.01a.236.236 0 0 0 .221-.205.213.213 0 0 0-.163-.215c-.106-.043-.215-.077-.324-.11a.552.552 0 0 1-.454-.513.755.755 0 0 1 .387-.79c.256-.114.547-.119.807-.013.282.087.282.091.148.358a33.27 33.27 0 0 1-.116.228M15.646 29.685c0-.35.003-.7-.001-1.05-.001-.08.022-.103.1-.102.355.004.71.005 1.064 0 .086-.001.11.03.102.113-.012.13.054.297-.027.379-.074.074-.232.015-.353.022h-.048c-.265 0-.298.045-.253.323.01.065.048.054.086.054.157 0 .315.003.473-.001.065-.002.09.017.087.089a3.58 3.58 0 0 0 0 .345c.004.073-.025.09-.09.088-.157-.005-.315 0-.473-.003-.057 0-.081.012-.084.08-.011.307-.014.307.282.307.107 0 .213.003.32-.001.063-.003.083.023.081.086a5 5 0 0 0 0 .346c.003.067-.024.082-.083.082a69.47 69.47 0 0 0-1.101 0c-.072.001-.083-.03-.082-.095v-1.062M9.25 28.535c.236 0 .444.002.652 0 .055-.002.073.038.097.075l.358.543c.12-.182.237-.352.344-.527a.173.173 0 0 1 .174-.093c.188.006.376.002.588.002l-.452.667a2.257 2.257 0 0 0-.348.539 2.378 2.378 0 0 0-.017.65c0 .119-.005.238.001.357.005.08-.024.097-.094.094a4.369 4.369 0 0 0-.39 0c-.078.004-.101-.02-.1-.102.003-.297-.001-.593.003-.89a.351.351 0 0 0-.066-.216c-.247-.356-.489-.714-.75-1.1M35.563 29.942c0-.255-.006-.511.003-.765.004-.117-.035-.14-.134-.132-.09.008-.181 0-.271.003-.055.002-.078-.015-.077-.077.004-.12.005-.239 0-.358-.003-.07.027-.08.084-.079.454.002.907.003 1.361 0 .072-.001.098.02.093.097a3.073 3.073 0 0 0 0 .32c.005.079-.024.1-.094.097-.095-.005-.19.004-.285-.003-.08-.006-.097.028-.097.106.003.523 0 1.045.004 1.568 0 .096-.02.13-.117.124a3.382 3.382 0 0 0-.379 0c-.072.003-.094-.022-.093-.098.004-.268.002-.535.002-.803"
          fill="#36735D"
        />
        <path
          d="M21.326 29.944c0-.263-.003-.527.002-.79.001-.082-.015-.119-.102-.112-.094.009-.19-.003-.284.004-.075.005-.094-.025-.09-.098a2.695 2.695 0 0 0-.001-.321c-.006-.082.027-.094.095-.093.446.002.891.003 1.336-.001.08 0 .103.026.098.105a3.587 3.587 0 0 0 0 .32c.002.064-.018.09-.081.087-.094-.003-.19.006-.284-.003-.09-.007-.113.026-.112.118.005.514 0 1.028.005 1.543.001.114-.029.15-.136.14a2.524 2.524 0 0 0-.355 0c-.073.004-.094-.02-.092-.097.004-.267.001-.534.001-.802M30.35 29.689c0-.346.003-.691-.003-1.037-.003-.102.03-.124.119-.119.122.007.244.007.367 0 .08-.004.097.028.097.106-.003.515.001 1.03-.004 1.544-.002.114.02.16.14.15.153-.01.308.003.461-.003.08-.004.102.027.098.106a3.592 3.592 0 0 0 0 .32c.003.066-.018.087-.08.086a74.532 74.532 0 0 0-1.113 0c-.07.001-.084-.024-.084-.09.003-.355.001-.709.001-1.063"
          fill="#35715B"
        />
        <path
          d="M37.406 29.689c0-.35.004-.7-.002-1.048 0-.088.024-.113.106-.108.129.007.26.005.39 0 .067-.002.097.012.097.093-.003.708-.003 1.415 0 2.121 0 .08-.027.098-.096.095a4.315 4.315 0 0 0-.401.001c-.084.005-.096-.032-.095-.106.003-.35.001-.7.001-1.048"
          fill="#36735D"
        />
        <path
          d="M38.283 16.36c-.01.071-.074.052-.113.065a2.005 2.005 0 0 0-1.45 1.644c-.13.634.043 1.291.467 1.78.27.328.639.56 1.052.659.032.008.064.005.068.05H36.98c-.013-.076-.082-.056-.124-.068a1.936 1.936 0 0 1-1.115-.813 2.13 2.13 0 0 1-.348-1.55c.059-.413.239-.798.517-1.108.257-.292.593-.502.967-.605.033-.01.076 0 .08-.055h1.326"
          fill="#8AAC9D"
        />
        <path
          d="M34.351 20.558c-.003-.055-.047-.045-.079-.055a2.038 2.038 0 0 1-1.478-1.611 2.075 2.075 0 0 1 .43-1.791c.263-.33.62-.569 1.025-.687.031-.01.075 0 .078-.055h1.327c-.02.077-.089.057-.136.071a1.98 1.98 0 0 0-1.026.725 2.205 2.205 0 0 0-.136 2.406c.267.462.704.801 1.22.943.032.009.075 0 .078.054H34.35"
          fill="#9EB9AF"
        />
        <path
          d="M35.654 20.558c-.003-.055-.047-.045-.079-.055a2.028 2.028 0 0 1-1.22-.942 2.209 2.209 0 0 1 .137-2.406c.254-.347.615-.601 1.026-.725.047-.014.117.006.136-.07l1.302-.001c-.003.054-.046.045-.079.054-.374.104-.71.314-.967.605a2.177 2.177 0 0 0-.169 2.659c.26.399.656.688 1.115.813.042.011.11-.008.124.068h-1.326"
          fill="#94B3A6"
        />
        <path
          d="M46.122 16.358c-.003.054-.046.046-.078.056a2.022 2.022 0 0 0-.951.587c-.77.86-.736 2.171.076 2.991.232.238.522.409.842.496.046.013.117-.008.135.071h-1.327c-.002-.036-.026-.043-.055-.052a2.599 2.599 0 0 1-.438-.177 1.976 1.976 0 0 1-.93-1.031 2.12 2.12 0 0 1 .025-1.737c.233-.55.7-.966 1.274-1.135.042-.013.11.008.124-.069h1.303"
          fill="#588674"
        />
        <path
          d="M44.819 16.358c-.013.077-.082.056-.124.07a2 2 0 0 0-1.275 1.135 2.118 2.118 0 0 0-.024 1.736c.176.445.506.811.93 1.031.14.072.287.131.438.177.03.01.053.016.055.052H43.54c-.003-.036-.024-.043-.055-.05a2.037 2.037 0 0 1-1.53-1.68 2.101 2.101 0 0 1 .484-1.78c.255-.302.595-.521.976-.628.036-.01.095.006.102-.063h1.302"
          fill="#5E8C7B"
        />
        <path
          d="M33.026 16.359c-.07.099-.188.081-.28.121a2.06 2.06 0 0 0-1.283 1.672 2.083 2.083 0 0 0 .348 1.525c.272.414.69.71 1.17.83.033.009.065.006.068.051l-.935.001a1.852 1.852 0 0 1-1.181-.42 2.038 2.038 0 0 1-.791-1.429 2.105 2.105 0 0 1 1.25-2.207c.235-.102.49-.152.746-.147.296.008.592.003.888.003"
          fill="#B1C7BF"
        />
      </g>
    </svg>
  );

export default SvgAch;
