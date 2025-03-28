const footer = document.querySelectorAll('.footer_component')
const footerComponent = `
<footer>
    <div class="top">
        <div class="container">
            <ul class="grid4">
                <a class="btn_home" href="#home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="20" viewBox="0 0 31 20" fill="none">
                        <path
                            d="M31 12.6913L31 19.0371L15.5 19.0371L0 19.0371L3.7209e-07 12.6913L15.5 -0.000171109L31 12.6913Z"
                            fill="white" />
                    </svg></a>
                <li class="col1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="179" height="179" viewBox="0 0 179 179"
                        fill="none">
                        <path
                            d="M179 4.75246V0H139.021V4.75246L150.466 8.02388V114.5H98.0394V8.02388L109.494 4.75246V0H69.5059V4.75246L80.9512 8.02388V114.5H28.5148V8.02388L39.9788 4.75246V0H0V4.75246L11.4453 8.02388V112.934L0 116.187V120.939H179V116.187L167.555 112.934V8.02388L179 4.75246Z"
                            fill="#94826A" />
                        <path
                            d="M65.6158 176.141C65.972 175.588 66.3189 174.969 66.6376 174.303L73.7241 159.371H70.8089L65.3908 171.126L59.7572 159.371H56.842L63.9848 174.116C63.5723 174.903 63.1506 175.513 62.7194 175.944C62.2882 176.356 61.782 176.562 61.2102 176.562C60.7415 176.562 60.3478 176.487 60.0197 176.347C59.6917 176.206 59.4386 176.056 59.2417 175.916L57.8638 177.968C58.1544 178.165 58.5199 178.353 58.9699 178.531C59.4386 178.728 60.0854 178.831 60.9102 178.831C61.6508 178.831 62.2976 178.718 62.8506 178.484C63.4224 178.268 63.9379 177.959 64.3878 177.565C64.8472 177.153 65.2502 176.684 65.6158 176.141Z"
                            fill="#94826A" />
                        <path
                            d="M41.4317 161.694V159.379H29.9021V178.464H35.995C36.9699 178.464 37.8604 178.351 38.6946 178.117C39.5195 177.883 40.2319 177.536 40.8225 177.067C41.4318 176.58 41.9098 175.989 42.2472 175.286C42.5847 174.583 42.7628 173.777 42.7628 172.858C42.7628 171.94 42.6035 171.143 42.2754 170.459C41.9473 169.774 41.4973 169.203 40.8974 168.734C40.3069 168.265 39.5945 167.918 38.7696 167.684C37.9635 167.45 37.0636 167.337 36.07 167.337H32.508V161.704H41.4317V161.694ZM35.8544 169.643C37.1479 169.643 38.1884 169.906 38.9852 170.421C39.7913 170.946 40.1944 171.752 40.1944 172.849C40.1944 173.889 39.8007 174.696 39.004 175.277C38.2353 175.848 37.1667 176.139 35.8263 176.139H32.508V169.643H35.8544Z"
                            fill="#94826A" />
                        <path
                            d="M142.836 167.948L149.923 159.38H147.073L140.174 167.329C139.78 167.292 139.377 167.264 138.965 167.245C138.571 167.207 138.159 167.189 137.728 167.189V159.371H135.112V178.456H137.728V169.504C139.181 169.467 140.455 169.617 141.533 169.963C142.63 170.282 143.567 170.816 144.336 171.557C145.114 172.279 145.742 173.207 146.22 174.36C146.726 175.513 147.111 176.872 147.382 178.456H150.27C149.801 175.616 148.976 173.338 147.786 171.613C146.586 169.888 144.936 168.67 142.836 167.948Z"
                            fill="#94826A" />
                        <path d="M118.296 159.379H115.681V178.464H118.296V159.379Z" fill="#94826A" />
                        <path d="M101.011 159.379H86.1067V161.666H92.2558V178.454H94.8711V161.666H101.011V159.379Z"
                            fill="#94826A" />
                    </svg>
                    <div class="soc">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"
                                fill="none">
                                <path
                                    d="M13.0029 5.8467C9.31389 5.8467 6.33832 8.594 6.33832 12C6.33832 15.406 9.31389 18.1533 13.0029 18.1533C16.6919 18.1533 19.6675 15.406 19.6675 12C19.6675 8.594 16.6919 5.8467 13.0029 5.8467ZM13.0029 16.0004C10.619 16.0004 8.67005 14.2064 8.67005 12C8.67005 9.7936 10.6132 7.99955 13.0029 7.99955C15.3926 7.99955 17.3358 9.7936 17.3358 12C17.3358 14.2064 15.3868 16.0004 13.0029 16.0004ZM21.4946 5.595C21.4946 6.39295 20.7986 7.03024 19.9401 7.03024C19.0759 7.03024 18.3856 6.38759 18.3856 5.595C18.3856 4.80241 19.0817 4.15977 19.9401 4.15977C20.7986 4.15977 21.4946 4.80241 21.4946 5.595ZM25.9086 7.05166C25.81 5.12909 25.3344 3.42608 23.8089 2.02298C22.2892 0.619882 20.4447 0.180743 18.3624 0.0843468C16.2163 -0.0281156 9.78372 -0.0281156 7.63759 0.0843468C5.56107 0.175388 3.71656 0.614526 2.19108 2.01763C0.665589 3.42073 0.195761 5.12373 0.0913553 7.0463C-0.0304518 9.02778 -0.0304518 14.9669 0.0913553 16.9483C0.189961 18.8709 0.665589 20.5739 2.19108 21.977C3.71656 23.3801 5.55527 23.8193 7.63759 23.9157C9.78372 24.0281 16.2163 24.0281 18.3624 23.9157C20.4447 23.8246 22.2892 23.3855 23.8089 21.977C25.3286 20.5739 25.8042 18.8709 25.9086 16.9483C26.0305 14.9669 26.0305 9.03314 25.9086 7.05166ZM23.1361 19.0744C22.6837 20.1241 21.8078 20.9327 20.6651 21.3558C18.954 21.9824 14.8938 21.8378 13.0029 21.8378C11.112 21.8378 7.04596 21.977 5.34066 21.3558C4.20379 20.9381 3.32794 20.1294 2.86972 19.0744C2.19108 17.4946 2.34769 13.7458 2.34769 12C2.34769 10.2542 2.19688 6.50006 2.86972 4.92558C3.32214 3.87593 4.19799 3.06728 5.34066 2.6442C7.05176 2.01763 11.112 2.16222 13.0029 2.16222C14.8938 2.16222 18.9598 2.02298 20.6651 2.6442C21.802 3.06192 22.6779 3.87058 23.1361 4.92558C23.8147 6.50541 23.6581 10.2542 23.6581 12C23.6581 13.7458 23.8147 17.4999 23.1361 19.0744Z"
                                    fill="#ECE5DB" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="27" viewBox="0 0 24 27"
                                fill="none">
                                <path
                                    d="M24 10.9237C23.7731 10.9439 23.5432 10.9574 23.3104 10.9574C20.6888 10.9574 18.385 9.65962 17.0448 7.69807C17.0448 12.8439 17.0448 18.6987 17.0448 18.7969C17.0448 23.327 13.2288 27 8.52239 27C3.81593 27 0 23.327 0 18.7969C0 14.2667 3.81593 10.5937 8.52239 10.5937C8.70029 10.5937 8.8742 10.6091 9.0491 10.6197V14.6621C8.8742 14.6419 8.70229 14.6111 8.52239 14.6111C6.11969 14.6111 4.17274 16.4851 4.17274 18.7978C4.17274 21.1105 6.11969 22.9845 8.52239 22.9845C10.9251 22.9845 13.0469 21.1625 13.0469 18.8498C13.0469 18.7584 13.0889 0 13.0889 0H17.1027C17.4805 3.45461 20.378 6.18097 24 6.43109V10.9237Z"
                                    fill="#ECE5DB" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24"
                                fill="none">
                                <path
                                    d="M22.0495 0H26.3451L16.9631 10.1654L28 24H19.3603L12.5884 15.6115L4.8492 24H0.547588L10.5806 13.125L0 0H8.85876L14.9735 7.66731L22.0495 0ZM20.5406 21.5654H22.9196L7.5628 2.30769H5.00739L20.5406 21.5654Z"
                                    fill="#ECE5DB" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26"
                                fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.75946 0C2.13479 0 0 2.05573 0 4.58318V21.4168C0 23.9443 2.13479 26 4.75946 26H22.2405C24.8652 26 27 23.9443 27 21.4168V4.58318C27 2.05573 24.8652 0 22.2405 0H4.75946ZM2.13669 4.58318C2.13669 3.19076 3.31348 2.05755 4.75946 2.05755H22.2405C23.6865 2.05755 24.8633 3.19076 24.8633 4.58318V21.4168C24.8633 22.8092 23.6865 23.9424 22.2405 23.9424H4.75946C3.31348 23.9424 2.13669 22.8092 2.13669 21.4168V4.58318ZM16.0582 3.54451H18.4895C18.9005 3.54451 19.2338 3.89795 19.2338 4.33392V7.49155C19.2338 7.92752 18.9005 8.28096 18.4895 8.28096H16.0582C15.1417 8.28096 14.396 9.07185 14.396 10.044V10.6492H17.001C17.412 10.6492 17.7452 11.0026 17.7452 11.4386V14.5962C17.7452 15.0322 17.412 15.3856 17.001 15.3856H14.396V21.7009C14.396 22.1369 14.0628 22.4903 13.6518 22.4903H10.6747C10.2637 22.4903 9.93044 22.1369 9.93044 21.7009V15.3856H8.06978C7.65875 15.3856 7.32551 15.0322 7.32551 14.5962V11.4386C7.32551 11.0026 7.65875 10.6492 8.06978 10.6492H9.93044V10.044C9.93044 6.46011 12.6793 3.54451 16.0582 3.54451ZM16.0582 6.70214H17.7452V5.12333H16.0582C13.5001 5.12333 11.419 7.33072 11.419 10.044V11.4386C11.419 11.8746 11.0857 12.228 10.6747 12.228H8.81404V13.8068H10.6747C11.0857 13.8068 11.419 14.1603 11.419 14.5962V20.9115H12.9075V14.5962C12.9075 14.1603 13.2407 13.8068 13.6518 13.8068H16.2567V12.228H13.6518C13.2407 12.228 12.9075 11.8746 12.9075 11.4386V10.044C12.9075 8.20129 14.3209 6.70214 16.0582 6.70214Z"
                                    fill="#ECE5DB" />
                            </svg>
                        </a>
                    </div>
                </li>
                <li class="col2">
                    <a href="../" class="header__link">Головна</a>
                    <a href="../page/catalog.html" class="header__link">Товари</a>
                    <a href="../page/about.html" class="header__link">Про нас</a>
                    <a href="../page/blog.html" class="header__link">Новини</a>
                    <a href="../page/account.html" class="header__link">Мій акаунт</a>
                    <a href="../" class="header__link">Кошик</a>
                    <a href="../page/corporate.html" class="header__link">Корпоративні замовлення</a>
                    <a href="../page/franchise.html" class="header__link">Франшиза</a>
                    <a href="../page/constructor.html" class="header__link">Конструктор боксів</a>
                </li>
                <li class="col3">
                    <div class="box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22"
                            fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.25 9.41667C0.25 4.62281 4.17493 0.75 9 0.75C13.8251 0.75 17.75 4.62281 17.75 9.41667C17.75 12.3982 16.0113 15.3409 14.1686 17.4829C13.236 18.5669 12.2463 19.482 11.3733 20.1328C10.9374 20.4577 10.5186 20.7258 10.1405 20.9162C9.78602 21.0947 9.38124 21.25 9 21.25C8.61876 21.25 8.21398 21.0947 7.85954 20.9162C7.48144 20.7258 7.06256 20.4577 6.62674 20.1328C5.75371 19.482 4.76395 18.5669 3.83144 17.4829C1.98872 15.3409 0.25 12.3982 0.25 9.41667ZM9 12C7.34315 12 6 10.6569 6 9C6 7.34315 7.34315 6 9 6C10.6569 6 12 7.34315 12 9C12 10.6569 10.6569 12 9 12Z"
                                fill="#453526" />
                        </svg>
                        <div class="info">
                            <h3>Львів</h3>
                            <p>· Братів Рогатинців, 9</p>
                            <p>· Театральна, 4</p>
                        </div>
                    </div>
                    <div class="box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22"
                            fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.25 9.41667C0.25 4.62281 4.17493 0.75 9 0.75C13.8251 0.75 17.75 4.62281 17.75 9.41667C17.75 12.3982 16.0113 15.3409 14.1686 17.4829C13.236 18.5669 12.2463 19.482 11.3733 20.1328C10.9374 20.4577 10.5186 20.7258 10.1405 20.9162C9.78602 21.0947 9.38124 21.25 9 21.25C8.61876 21.25 8.21398 21.0947 7.85954 20.9162C7.48144 20.7258 7.06256 20.4577 6.62674 20.1328C5.75371 19.482 4.76395 18.5669 3.83144 17.4829C1.98872 15.3409 0.25 12.3982 0.25 9.41667ZM9 12C7.34315 12 6 10.6569 6 9C6 7.34315 7.34315 6 9 6C10.6569 6 12 7.34315 12 9C12 10.6569 10.6569 12 9 12Z"
                                fill="#453526" />
                        </svg>
                        <div class="info">
                            <h3>Трускавець</h3>
                            <p>· Стебницька, 1</p>
                        </div>
                    </div>
                </li>
                <li class="col4">
                    <div class="box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                            fill="none">
                            <path
                                d="M17.0621 18.2183C15.1077 20.1726 10.1028 18.3363 5.88327 14.1167C1.66372 9.89718 -0.172609 4.89227 1.7817 2.93795L3.06847 1.65118C3.9568 0.762856 5.42054 0.786338 6.33784 1.70363L8.33092 3.69672C9.24822 4.61401 9.2717 6.07776 8.38337 6.96609L8.10699 7.24247C7.62737 7.72209 7.58045 8.49581 8.0261 9.03587C8.45597 9.55679 8.9194 10.0756 9.42188 10.5781C9.92435 11.0806 10.4432 11.544 10.9641 11.9739C11.5042 12.4196 12.2779 12.3726 12.7575 11.893L13.0339 11.6166C13.9222 10.7283 15.386 10.7518 16.3033 11.6691L18.2964 13.6622C19.2137 14.5795 19.2371 16.0432 18.3488 16.9315L17.0621 18.2183Z"
                                fill="#453526" stroke="#453526" stroke-width="1.5" />
                        </svg>
                        <a class="header__link" href="tel:+0967080325">+380 (96) 708-03-25</a>
                    </div>
                    <div class="box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18"
                            fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.25 6C0.25 2.82436 2.82436 0.25 6 0.25H16C19.1756 0.25 21.75 2.82436 21.75 6V12C21.75 15.1756 19.1756 17.75 16 17.75H6C2.82436 17.75 0.25 15.1756 0.25 12V6ZM5.45 5.4C5.11863 5.15147 4.64853 5.21863 4.4 5.55C4.15147 5.88137 4.21863 6.35147 4.55 6.6L9.35 10.2C10.3278 10.9333 11.6722 10.9333 12.65 10.2L17.45 6.6C17.7814 6.35147 17.8485 5.88137 17.6 5.55C17.3515 5.21863 16.8814 5.15147 16.55 5.4L11.75 9C11.3056 9.33333 10.6944 9.33333 10.25 9L5.45 5.4Z"
                                fill="#453526" />
                        </svg>
                        <a class="header__link"
                            href="mailto:shokoladnuybutik@gmail.com">shokoladnuybutik@gmail.com</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="footer_bot">
        <div class="container">
            <div class="grid5">
                <p>Copyright (c) Shokoladnuybutik</p>
                <p>Всі права зарезервовані</p>
                <a href="#">Права користувача</a>
                <a href="#">FAQ</a>
                <a href="#">by LiddWeb</a>
            </div>
        </div>
    </div>
</footer>

`
footer.forEach( (el) => {
  return el.innerHTML = footerComponent
}
)

