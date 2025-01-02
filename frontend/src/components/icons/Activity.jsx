import PropTypes from "prop-types";

/**
 *
 * Activity Icon
 *
 * @component
 *
 * @example
 * <Activity className="w-4 h-auto aspect-square" />
 *
 * @param {Object} props - Component props.
 * @param {string|undefined} props.className - className
 * @returns {JSX.Element} The Activity Icon.
 *
 */
export default function Activity({ className }) {
    return (
        <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.3382 6.24754C24.3382 4.36337 25.8682 2.83337 27.7523 2.83337C29.6365 2.83337 31.1665 4.36337 31.1665 6.24754C31.1665 8.13171 29.6365 9.66171 27.7523 9.66171C25.8682 9.66171 24.3382 8.13171 24.3382 6.24754ZM18.8838 20.909L22.978 15.6263L22.9213 15.6546C23.148 15.343 23.1905 14.9463 23.0347 14.5921C22.8803 14.238 22.5388 13.9971 22.1719 13.9688C21.788 13.9263 21.4069 14.0963 21.1788 14.408L17.7519 18.8421L13.8263 15.7538C13.5855 15.5696 13.3022 15.4974 13.0188 15.5271C12.7369 15.5696 12.4819 15.724 12.3105 15.9507L8.11859 21.4063L8.03217 21.5338C7.79134 21.9857 7.90467 22.5665 8.32967 22.8796C8.52801 23.0071 8.74051 23.0921 8.98134 23.0921C9.30859 23.1063 9.61884 22.9349 9.81717 22.6671L13.373 18.0899L17.4105 21.123L17.538 21.2065C17.9913 21.4474 18.558 21.3355 18.8838 20.909ZM21.8872 5.35547C21.8305 5.70963 21.8022 6.0638 21.8022 6.41797C21.8022 9.60547 24.3805 12.1824 27.5538 12.1824C27.908 12.1824 28.248 12.1413 28.6022 12.0846V23.5157C28.6022 28.3196 25.7688 31.1671 20.9522 31.1671H10.4844C5.66634 31.1671 2.83301 28.3196 2.83301 23.5157V13.0338C2.83301 8.21713 5.66634 5.35547 10.4844 5.35547H21.8872Z"
            />
        </svg>
    );
}

Activity.propTypes = {
    className: PropTypes.string,
};
