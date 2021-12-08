import React from "react";

export default function IconStatus({ type, ...props }) {
  if (type === "unstaking" || type === "staked") {
    return (
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.86641 9.03816C4.87985 7.9865 6.28394 7.44352 7.71426 7.54973C9.14422 7.65594 10.4592 8.4009 11.3181 9.59157C11.5905 9.96908 11.5161 10.5046 11.1521 10.7871C10.7877 11.0696 10.2716 10.9924 9.99918 10.6145C9.42669 9.82113 8.54981 9.32437 7.59638 9.25356C6.64296 9.18275 5.70714 9.54461 5.03115 10.246L2.5705 12.7972C1.32202 14.1377 1.33999 16.2683 2.61075 17.586C3.88151 18.9037 5.93606 18.9224 7.21832 17.6382L8.62672 16.1777C8.94836 15.8442 9.46982 15.8442 9.79146 16.1777C10.1131 16.5112 10.1131 17.052 9.79146 17.3855L8.373 18.8564C6.43416 20.798 3.35214 20.7704 1.44601 18.7938C-0.460125 16.8172 -0.486719 13.6212 1.3957 11.6002L3.86641 9.03816Z"
          fill="currentColor"
        />
        <mask
          id="mask0_3016_923"
          maskUnits="userSpaceOnUse"
          x="7"
          z
          y="0"
          width="13"
          height="13"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.99783 0H19.0602V12.4416H7.99783V0Z"
            fill="currentColor"
          />
        </mask>
        <g mask="url(#mask0_3016_923)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.83542 1.64143C11.9715 -0.574633 15.3671 -0.542738 17.4671 1.71245C19.5672 3.96807 19.5965 7.61516 17.5226 9.92181L15.4419 12.1562C15.0875 12.5368 14.513 12.5368 14.1587 12.1562C13.8043 11.776 13.8043 11.1585 14.1587 10.7779L16.2282 8.55543C17.6037 7.02617 17.5839 4.59449 16.1839 3.09074C14.7839 1.58743 12.5203 1.56616 11.1056 3.03376L9.58163 4.66083C9.24508 5.02018 8.6975 5.0878 8.33086 4.76375C7.90958 4.39121 7.8882 3.72056 8.26553 3.31784L9.83542 1.64143Z"
            fill="currentColor"
          />
        </g>
      </svg>
    );
  } else if (type === "unstaked") {
    return (
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.91277 5.16846V5.16846C3.12336 5.38335 3.12336 5.73173 2.91277 5.94662L1.68313 7.20136C0.865715 8.06498 0.877244 9.43761 1.70924 10.2866C2.54124 11.1356 3.88666 11.1476 4.72619 10.3202L5.62642 9.40136C5.82595 9.198 6.15113 9.15886 6.36948 9.34109C6.62054 9.5507 6.63442 9.92933 6.41089 10.1574L5.48195 11.1048C4.21254 12.356 2.19466 12.3382 0.946656 11.0647C-0.301109 9.79127 -0.318756 7.73221 0.91395 6.43017L2.15019 5.16846C2.36077 4.95358 2.70219 4.95358 2.91277 5.16846V5.16846ZM6.31827 0.926693C7.58769 -0.324448 9.60557 -0.30644 10.8536 0.966789C12.1016 2.24026 12.119 4.29932 10.8863 5.6016L9.65004 6.86307C9.43945 7.07795 9.09804 7.07795 8.88745 6.86307V6.86307C8.67686 6.64818 8.67686 6.2998 8.88745 6.08492L10.1173 4.83017C10.9347 3.96655 10.923 2.59392 10.091 1.74494C9.25898 0.895961 7.9138 0.884196 7.0731 1.71253L6.16745 2.63137C5.96745 2.83426 5.64204 2.87243 5.42416 2.68948C5.1738 2.47915 5.1611 2.10052 5.38533 1.87315L6.31827 0.926693Z"
          fill="currentColor"
        />
      </svg>
    );
  }
}
