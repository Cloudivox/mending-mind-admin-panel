import logo from "../../../../assets/images/logo.png";

function PageTwo({ formData }: any) {
  const goals =
    formData?.selectedGoals &&
    Object.keys(formData.selectedGoals).filter(
      (key) => formData.selectedGoals[key]
    );
  return (
    <div
      data-layer="A4 - 3"
      className="A43"
      style={{
        width: "595px",
        height: "842px",
        position: "relative",
        background: "white",
        marginTop: "600px",
      }}
    >
      <div
        data-layer="Rectangle 7"
        className="Rectangle7"
        style={{
          width: "594px",
          height: "842px",
          left: "1px",
          top: "0px",
          position: "absolute",
          background: "rgba(244, 243, 222, 0.17)",
        }}
      ></div>
      <div
        data-layer="01 y itll works for you"
        className="YItllWorksForYou"
        style={{
          width: "581.65px",
          height: "221.29px",
          left: "38.81px",
          top: "32px",
          position: "absolute",
        }}
      >
        <div
          data-layer="95%"
          style={{
            width: "144.79px",
            height: "47.14px",
            left: "0px",
            top: "47.56px",
            position: "absolute",
            textAlign: "center",
            color: "#f1b749",
            fontSize: "40.41px",
            fontFamily: "Montserrat",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          95%
        </div>
        <div
          data-layer="47%"
          style={{
            width: "144.78px",
            height: "47.14px",
            left: "340.92px",
            top: "109.21px",
            position: "absolute",
            textAlign: "center",
            color: "#f1b749",
            fontSize: "40.4px",
            fontFamily: "Montserrat",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          47%
        </div>
        <div
          data-layer="Why will this plan work for You?"
          className="WhyWillThisPlanWorkForYou"
          style={{
            width: "531.47px",
            height: "39.23px",
            left: "50.19px",
            top: "14px",
            position: "absolute",
          }}
        >
          <span
            style={{
              color: "black",
              fontSize: "20px",
              fontFamily: "Playfair Display",
              fontStyle: "italic",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Why will this plan work for{" "}
          </span>
          <span
            style={{
              color: "black",
              fontSize: "20px",
              fontFamily: "Playfair Display",
              fontStyle: "italic",
              fontWeight: "700",
              textDecoration: "underline",
              wordWrap: "break-word",
            }}
          >
            You
          </span>
          <span
            style={{
              color: "black",
              fontSize: "20px",
              fontFamily: "Playfair Display",
              fontStyle: "italic",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            ?
          </span>
        </div>
        <div
          data-layer=" of our clients report real progress in just 3 sessions."
          className="OfOurClientsReportRealProgressInJust3Sessions"
          style={{
            width: "458.61px",
            height: "25.22px",
            left: "43.9px",
            top: "65.31px",
            position: "absolute",
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "black",
              fontSize: "12.14px",
              fontFamily: "Montserrat",
              fontWeight: 300,
              wordWrap: "break-word",
            }}
          >
            of our clients report real progress in{" "}
          </span>
          <span
            style={{
              color: "black",
              fontSize: "12.14px",
              fontFamily: "Montserrat",
              fontWeight: 500,
              wordWrap: "break-word",
            }}
          >
            just 3 sessions.
          </span>
        </div>
        <div
          data-layer="We are Rated 4.9"
          className="WeAreRated49"
          style={{
            width: "458.61px",
            height: "25.22px",
            left: "29.89px",
            top: "98.93px",
            position: "absolute",
          }}
        >
          <span
            style={{
              color: "black",
              fontSize: "12.14px",
              fontFamily: "Montserrat",
              fontWeight: 300,
              wordWrap: "break-word",
            }}
          >
            We are Rated{" "}
          </span>
          <span
            style={{
              color: "black",
              fontSize: "12.14px",
              fontFamily: "Montserrat",
              fontWeight: 500,
              wordWrap: "break-word",
            }}
          >
            4.9
          </span>
          <span
            style={{
              color: "black",
              fontSize: "12.14px",
              fontFamily: "Montserrat",
              fontWeight: 300,
              wordWrap: "break-word",
            }}
          ></span>
        </div>
        <div
          data-layer="on Google, trusted by hundreds."
          className="OnGoogleTrustedByHundreds"
          style={{
            width: "199.88px",
            height: "25.22px",
            left: "268.07px",
            top: "97.06px",
            position: "absolute",
          }}
        >
          <span
            style={{
              color: "black",
              fontSize: "12.14px",
              fontFamily: "Montserrat",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            on Google
          </span>
          <span
            style={{
              color: "black",
              fontSize: "12.14px",
              fontFamily: "Montserrat",
              fontWeight: "300",
              wordWrap: "break-word",
            }}
          >
            , trusted by hundreds.
          </span>
        </div>
        <div
          data-layer="Neuroscience confirms that therapy creates lasting brain changes."
          className="NeuroscienceConfirmsThatTherapyCreatesLastingBrainChanges"
          style={{
            width: "458.61px",
            height: "25.22px",
            left: "29.89px",
            top: "187.66px",
            position: "absolute",
          }}
        >
          <span
            style={{
              color: "black",
              fontSize: "12.14px",
              fontFamily: "Montserrat",
              fontWeight: "300",
              wordWrap: "break-word",
            }}
          >
            Neuroscience confirms that therapy{" "}
          </span>
          <span
            style={{
              color: "black",
              fontSize: "12.14px",
              fontFamily: "Montserrat",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            creates lasting brain changes.
          </span>
        </div>
        <div
          data-layer="Our expert-driven approach ensures real transformation, not just coping."
          className="OurExpertDrivenApproachEnsuresRealTransformationNotJustCoping"
          style={{
            width: "458.61px",
            height: "25.22px",
            left: "29.89px",
            top: "156.84px",
            position: "absolute",
          }}
        >
          <span
            style={{
              color: "black",
              fontSize: "12.14px",
              fontFamily: "Montserrat",
              fontWeight: "300",
              wordWrap: "break-word",
            }}
          >
            Our expert-driven approach ensures{" "}
          </span>
          <span
            style={{
              color: "black",
              fontSize: "12.14px",
              fontFamily: "Montserrat",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            real transformation
          </span>
          <span
            style={{
              color: "black",
              fontSize: "12.14px",
              fontFamily: "Montserrat",
              fontWeight: "300",
              wordWrap: "break-word",
            }}
          >
            , not just coping.
          </span>
        </div>
        <div
          data-layer="Therapy builds emotional resilience and lowers stress by"
          className="TherapyBuildsEmotionalResilienceAndLowersStressBy"
          style={{
            width: "458.61px",
            height: "25.22px",
            left: "30.82px",
            top: "127.89px",
            position: "absolute",
            color: "black",
            fontSize: "12.14px",
            fontFamily: "Montserrat",
            fontWeight: 300,
            wordWrap: "break-word",
          }}
        >
          Therapy builds emotional resilience and lowers stress by
        </div>
        <div
          data-svg-wrapper
          data-layer="Group 1"
          className="Group1"
          style={{ left: "137.3px", top: "94.26px", position: "absolute" }}
        >
          <svg
            width="128"
            height="23"
            viewBox="0 0 128 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.01161 10.8158L6.37415 13.8982L5.44011 18.1947C5.3467 18.7551 5.53351 19.3156 6.00053 19.5958C6.18734 19.7826 6.46755 19.876 6.74776 19.876C6.93457 19.876 7.12138 19.876 7.30818 19.7826C7.30818 19.7826 7.40159 19.7826 7.40159 19.6892L11.2311 17.5409L15.0607 19.6892C15.0607 19.6892 15.1541 19.6892 15.1541 19.7826C15.6211 19.9694 16.1815 19.9694 16.5551 19.6892C17.0222 19.409 17.209 18.8485 17.1156 18.2881L16.1815 13.9916C16.5551 13.7113 17.1156 13.1509 17.676 12.5905L19.4507 11.0026L19.5441 10.9092C19.9177 10.5356 20.0111 9.9752 19.8243 9.50818C19.6375 9.04116 19.2639 8.66755 18.7034 8.57414H18.61L14.2201 8.10712L12.4454 4.09076C12.4454 4.09076 12.4454 3.99736 12.352 3.99736C12.2586 3.34354 11.7916 3.06332 11.3245 3.06332C10.8575 3.06332 10.3905 3.34354 10.1103 3.81055C10.1103 3.81055 10.1103 3.90396 10.0169 3.90396L8.24222 7.92032L3.85225 8.38733H3.75884C3.29182 8.48074 2.82481 8.85435 2.638 9.32137C2.54459 9.88179 2.638 10.4422 3.01161 10.8158Z"
              fill="#F1B749"
            />
            <path
              d="M29.1646 10.8158L32.5272 13.8982L31.5931 18.1947C31.4997 18.7551 31.6865 19.3156 32.1535 19.5958C32.3404 19.7826 32.6206 19.876 32.9008 19.876C33.0876 19.876 33.2744 19.876 33.4612 19.7826C33.4612 19.7826 33.5546 19.7826 33.5546 19.6892L37.3842 17.5409L41.2137 19.6892C41.2137 19.6892 41.3071 19.6892 41.3071 19.7826C41.7741 19.9694 42.3345 19.9694 42.7082 19.6892C43.1752 19.409 43.362 18.8485 43.2686 18.2881L42.3345 13.9916C42.7082 13.7113 43.2686 13.1509 43.829 12.5905L45.6037 11.0026L45.6971 10.9092C46.0707 10.5356 46.1641 9.9752 45.9773 9.50818C45.7905 9.04116 45.4169 8.66755 44.8564 8.57414H44.763L40.3731 8.10712L38.5984 4.09076C38.5984 4.09076 38.5984 3.99736 38.505 3.99736C38.4116 3.34354 37.9446 3.06332 37.4776 3.06332C37.0105 3.06332 36.5435 3.34354 36.2633 3.81055C36.2633 3.81055 36.2633 3.90396 36.1699 3.90396L34.3952 7.92032L30.0053 8.38733H29.9119C29.4448 8.48074 28.9778 8.85435 28.791 9.32137C28.6976 9.88179 28.791 10.4422 29.1646 10.8158Z"
              fill="#F1B749"
            />
            <path
              d="M55.3177 10.8158L58.6802 13.8982L57.7462 18.1947C57.6528 18.7551 57.8396 19.3156 58.3066 19.5958C58.4934 19.7826 58.7736 19.876 59.0539 19.876C59.2407 19.876 59.4275 19.876 59.6143 19.7826C59.6143 19.7826 59.7077 19.7826 59.7077 19.6892L63.5372 17.5409L67.3668 19.6892C67.3668 19.6892 67.4602 19.6892 67.4602 19.7826C67.9272 19.9694 68.4876 19.9694 68.8612 19.6892C69.3283 19.409 69.5151 18.8485 69.4217 18.2881L68.4876 13.9916C68.8612 13.7113 69.4217 13.1509 69.9821 12.5905L71.7568 11.0026L71.8502 10.9092C72.2238 10.5356 72.3172 9.9752 72.1304 9.50818C71.9436 9.04116 71.5699 8.66755 71.0095 8.57414H70.9161L66.5261 8.10712L64.7515 4.09076C64.7515 4.09076 64.7515 3.99736 64.6581 3.99736C64.5647 3.34354 64.0977 3.06332 63.6306 3.06332C63.1636 3.06332 62.6966 3.34354 62.4164 3.81055C62.4164 3.81055 62.4164 3.90396 62.323 3.90396L60.5483 7.92032L56.1583 8.38733H56.0649C55.5979 8.48074 55.1309 8.85435 54.9441 9.32137C54.8507 9.88179 54.9441 10.4422 55.3177 10.8158Z"
              fill="#F1B749"
            />
            <path
              d="M81.4707 10.8158L84.8333 13.8982L83.8992 18.1947C83.8058 18.7551 83.9926 19.3156 84.4596 19.5958C84.6464 19.7826 84.9267 19.876 85.2069 19.876C85.3937 19.876 85.5805 19.876 85.7673 19.7826C85.7673 19.7826 85.8607 19.7826 85.8607 19.6892L89.6902 17.5409L93.5198 19.6892C93.5198 19.6892 93.6132 19.6892 93.6132 19.7826C94.0802 19.9694 94.6406 19.9694 95.0143 19.6892C95.4813 19.409 95.6681 18.8485 95.5747 18.2881L94.6406 13.9916C95.0143 13.7113 95.5747 13.1509 96.1351 12.5905L97.9098 11.0026L98.0032 10.9092C98.3768 10.5356 98.4702 9.9752 98.2834 9.50818C98.0966 9.04116 97.723 8.66755 97.1625 8.57414H97.0691L92.6792 8.10712L90.9045 4.09076C90.9045 4.09076 90.9045 3.99736 90.8111 3.99736C90.7177 3.34354 90.2507 3.06332 89.7836 3.06332C89.3166 3.06332 88.8496 3.34354 88.5694 3.81055C88.5694 3.81055 88.5694 3.90396 88.476 3.90396L86.7013 7.92032L82.3114 8.38733H82.2179C81.7509 8.48074 81.2839 8.85435 81.0971 9.32137C81.0037 9.88179 81.0971 10.4422 81.4707 10.8158Z"
              fill="#F1B749"
            />
            <path
              d="M107.624 10.8158L110.986 13.8982L110.052 18.1947C109.959 18.7551 110.146 19.3156 110.613 19.5958C110.799 19.7826 111.08 19.876 111.36 19.876C111.547 19.876 111.733 19.876 111.92 19.7826C111.92 19.7826 112.014 19.7826 112.014 19.6892L115.843 17.5409L119.673 19.6892C119.673 19.6892 119.766 19.6892 119.766 19.7826C120.233 19.9694 120.794 19.9694 121.167 19.6892C121.634 19.409 121.821 18.8485 121.728 18.2881L120.794 13.9916C121.167 13.7113 121.728 13.1509 122.288 12.5905L124.063 11.0026L124.156 10.9092C124.53 10.5356 124.623 9.9752 124.436 9.50818C124.25 9.04116 123.876 8.66755 123.316 8.57414H123.222L118.832 8.10712L117.058 4.09076C117.058 4.09076 117.058 3.99736 116.964 3.99736C116.871 3.34354 116.404 3.06332 115.937 3.06332C115.47 3.06332 115.003 3.34354 114.722 3.81055C114.722 3.81055 114.722 3.90396 114.629 3.90396L112.854 7.92032L108.464 8.38733H108.371C107.904 8.48074 107.437 8.85435 107.25 9.32137C107.157 9.88179 107.25 10.4422 107.624 10.8158Z"
              fill="#F1B749"
            />
          </svg>
        </div>
        <div
          data-svg-wrapper
          data-layer="mdi:brain"
          className="MdiBrain"
          style={{ left: "434.33px", top: "178.32px", position: "absolute" }}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.3256 23.4365C38.4868 26.2114 37.2157 28.8788 34.9421 30.5079L36.3206 33.1754C36.7323 33.981 36.786 34.9298 36.428 35.7712C36.0878 36.6126 35.3896 37.275 34.5303 37.5615L33.116 38.009C32.5271 38.2066 31.8915 38.2181 31.2958 38.042C30.7001 37.8658 30.173 37.5105 29.7862 37.0244L25.9909 32.5488C24.3976 32.2803 22.8938 31.6 21.6227 30.5795C20.7276 30.8481 19.8325 30.9913 18.9374 30.9913C17.362 30.9913 15.7866 30.5079 14.4618 29.577C13.513 29.8634 12.5462 29.9888 11.5616 29.9709C10.1473 29.9888 8.75092 29.7023 7.44405 29.1653C6.18548 28.6048 5.11005 27.7015 4.34073 26.5587C3.57142 25.4158 3.13929 24.0794 3.09377 22.7025C2.95055 21.4135 3.16538 20.1067 3.72035 18.9251C3.20118 17.5824 3.14748 16.1144 3.59504 14.7538C4.25742 13.0531 5.51059 11.6388 7.0681 10.7437C8.10643 7.71821 11.0245 5.69524 14.229 5.91007C17.0934 3.22472 21.4795 2.93828 24.6661 5.24768C25.418 5.05076 26.2057 4.94334 26.9934 4.94334C29.4282 4.88964 31.7376 5.96378 33.2593 7.87933C36.9114 8.82816 39.5251 12.0864 39.6683 15.8817C39.7578 17.8689 39.2208 19.8202 38.1287 21.4851C38.254 22.1296 38.3256 22.7741 38.3256 23.4365ZM29.3745 20.9123C30.3949 21.0376 31.2005 21.8074 31.2005 22.8278C31.2005 23.3026 31.0119 23.758 30.6761 24.0937C30.3404 24.4294 29.8851 24.618 29.4103 24.618H28.2824C27.7095 26.2293 26.707 27.6436 25.3822 28.7177C25.8298 28.8788 26.2952 28.9683 26.7607 29.0936C35.9446 28.9683 34.8705 23.3649 34.8705 23.2754C34.8474 22.6663 34.7045 22.0678 34.4499 21.514C34.1953 20.9603 33.8341 20.4621 33.3868 20.0481C32.9395 19.6341 32.415 19.3123 31.8433 19.1012C31.2715 18.89 30.6638 18.7937 30.0547 18.8177C29.5799 18.8177 29.1246 18.6291 28.7889 18.2933C28.4531 17.9576 28.2645 17.5022 28.2645 17.0274C28.2645 16.5526 28.4531 16.0973 28.7889 15.7616C29.1246 15.4258 29.5799 15.2372 30.0547 15.2372C32.2567 15.2909 34.3692 16.1144 36.0162 17.5645C36.1057 17.0453 36.1595 16.5083 36.1595 15.9712C36.052 13.7513 35.0495 11.8179 31.0215 11.4419C28.7837 6.1428 23.1444 9.07879 23.1444 10.7258C23.0907 11.1376 23.5204 12.0148 23.592 12.0685C24.0668 12.0685 24.5221 12.2571 24.8579 12.5928C25.1936 12.9286 25.3822 13.3839 25.3822 13.8587C25.3822 14.8434 24.5766 15.649 23.592 15.649C22.6432 15.6132 21.748 15.2551 21.0319 14.6464C20.1726 15.2014 19.188 15.5415 18.1676 15.649C17.1471 15.7385 16.3057 15.0224 16.252 14.0377C16.2196 13.804 16.2351 13.566 16.2977 13.3385C16.3603 13.1109 16.4686 12.8985 16.616 12.7142C16.7635 12.5299 16.9469 12.3776 17.1552 12.2666C17.3635 12.1555 17.5922 12.0881 17.8274 12.0685C18.1139 12.0327 19.5102 11.8179 19.5102 10.69C19.5102 9.50845 19.9578 8.3806 20.7276 7.48548C19.0806 7.03792 17.3083 7.6287 15.518 9.79489C12.224 9.27572 10.8813 9.72328 9.89667 13.2142C8.19595 14.0557 7.30083 14.6464 6.90697 16.4367C8.84043 16.0428 10.8276 16.2039 12.6715 16.8842C13.5667 17.2244 14.0679 18.2269 13.7278 19.1936C13.3876 20.1246 12.3493 20.59 11.4184 20.2499C10.1115 19.677 8.64351 19.6412 7.30083 20.1425C6.72795 20.6258 6.72795 21.6284 6.72795 22.4161C6.72795 23.7408 7.39034 24.9761 8.51819 25.6922C9.46701 26.1756 10.5233 26.4262 11.5795 26.4083C11.311 25.9428 11.0782 25.4595 10.8813 24.9582C10.7404 24.4982 10.7833 24.0016 11.0011 23.5726C11.2188 23.1436 11.5945 22.8159 12.0489 22.6582C12.5034 22.5005 13.0014 22.5252 13.438 22.7271C13.8746 22.929 14.216 23.2924 14.3902 23.7408C15.1063 25.7817 16.9323 27.1781 19.0806 27.4108C21.5332 27.2855 23.7173 25.8354 24.7914 23.5976C25.2032 21.1271 27.1904 20.9123 29.3745 20.9123ZM32.9549 34.2853L31.845 31.958L30.5739 32.2445L32.3641 34.4823L32.9549 34.2853ZM24.6303 18.8714C24.6459 18.4141 24.4857 17.9681 24.1828 17.6252C23.8798 17.2823 23.457 17.0684 23.0012 17.0274C21.7301 16.9558 20.4949 17.3855 19.5461 18.2269C18.5256 19.2652 17.9885 20.6974 18.0423 22.1475C18.0423 22.6223 18.2309 23.0777 18.5666 23.4134C18.9023 23.7491 19.3577 23.9378 19.8325 23.9378C20.8529 23.9378 21.6227 23.1322 21.6227 22.1475C21.6227 21.6642 21.748 21.1808 22.0345 20.7869C22.2493 20.6079 22.5178 20.5184 22.8043 20.5184C23.7889 20.5721 24.6303 19.8381 24.6303 18.8714Z"
              fill="#F1B749"
            />
          </svg>
        </div>
        <div
          data-svg-wrapper
          data-layer="mingcute:checkbox-fill"
          className="MingcuteCheckboxFill"
          style={{ left: "7.47px", top: "67.17px", position: "absolute" }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.0092 1.80871C2.7202 1.80871 2.44302 1.92352 2.23866 2.12788C2.0343 2.33224 1.91949 2.60941 1.91949 2.89842V10.5264C1.91949 10.8154 2.0343 11.0926 2.23866 11.2969C2.44302 11.5013 2.7202 11.6161 3.0092 11.6161H10.6372C10.9262 11.6161 11.2034 11.5013 11.4077 11.2969C11.6121 11.0926 11.7269 10.8154 11.7269 10.5264V2.89842C11.7269 2.60941 11.6121 2.33224 11.4077 2.12788C11.2034 1.92352 10.9262 1.80871 10.6372 1.80871H3.0092ZM9.52022 5.51154C9.62246 5.40938 9.67992 5.27078 9.67997 5.12625C9.68002 4.98172 9.62266 4.84308 9.52049 4.74084C9.41833 4.63861 9.27973 4.58114 9.1352 4.58109C8.99067 4.58104 8.85203 4.63841 8.7498 4.74057L6.05276 7.4376L4.89713 6.28197C4.84654 6.23134 4.78648 6.19118 4.72037 6.16377C4.65426 6.13636 4.5834 6.12224 4.51183 6.12221C4.3673 6.12216 4.22867 6.17953 4.12643 6.28169C4.02419 6.38386 3.96673 6.52245 3.96668 6.66699C3.96663 6.81152 4.02399 6.95015 4.12616 7.05239L5.62887 8.5551C5.68452 8.61079 5.75061 8.65496 5.82334 8.68509C5.89608 8.71523 5.97403 8.73074 6.05276 8.73074C6.13149 8.73074 6.20945 8.71523 6.28219 8.68509C6.35492 8.65496 6.421 8.61079 6.47666 8.5551L9.52022 5.51154Z"
              fill="#B0DAD9"
            />
          </svg>
        </div>
        <div
          data-svg-wrapper
          data-layer="mingcute:checkbox-fill"
          className="MingcuteCheckboxFill"
          style={{ left: "8.41px", top: "98.93px", position: "absolute" }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.94329 2.56596C2.65428 2.56596 2.37711 2.68077 2.17275 2.88513C1.96838 3.08949 1.85358 3.36666 1.85358 3.65567V11.2836C1.85358 11.5727 1.96838 11.8498 2.17275 12.0542C2.37711 12.2585 2.65428 12.3734 2.94329 12.3734H10.5713C10.8603 12.3734 11.1374 12.2585 11.3418 12.0542C11.5462 11.8498 11.661 11.5727 11.661 11.2836V3.65567C11.661 3.36666 11.5462 3.08949 11.3418 2.88513C11.1374 2.68077 10.8603 2.56596 10.5713 2.56596H2.94329ZM9.4543 6.2688C9.55654 6.16663 9.614 6.02804 9.61405 5.88351C9.61411 5.73897 9.55674 5.60034 9.45458 5.4981C9.35241 5.39586 9.21382 5.3384 9.06928 5.33835C8.92475 5.3383 8.78611 5.39566 8.68388 5.49783L5.98685 8.19486L4.83121 7.03922C4.78062 6.9886 4.72056 6.94844 4.65445 6.92103C4.58834 6.89362 4.51748 6.87949 4.44592 6.87947C4.30138 6.87942 4.16275 6.93679 4.06051 7.03895C3.95827 7.14111 3.90081 7.27971 3.90076 7.42424C3.90071 7.56878 3.95807 7.70741 4.06024 7.80965L5.56295 9.31236C5.61861 9.36804 5.68469 9.41221 5.75742 9.44235C5.83016 9.47249 5.90812 9.488 5.98685 9.488C6.06558 9.488 6.14354 9.47249 6.21627 9.44235C6.289 9.41221 6.35509 9.36804 6.41074 9.31236L9.4543 6.2688Z"
              fill="#B0DAD9"
            />
          </svg>
        </div>
        <div
          data-svg-wrapper
          data-layer="mingcute:checkbox-fill"
          className="MingcuteCheckboxFill"
          style={{ left: "8.41px", top: "129.75px", position: "absolute" }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.94329 2.38918C2.65428 2.38918 2.37711 2.50398 2.17275 2.70834C1.96838 2.9127 1.85358 3.18988 1.85358 3.47889V11.1069C1.85358 11.3959 1.96838 11.673 2.17275 11.8774C2.37711 12.0818 2.65428 12.1966 2.94329 12.1966H10.5713C10.8603 12.1966 11.1374 12.0818 11.3418 11.8774C11.5462 11.673 11.661 11.3959 11.661 11.1069V3.47889C11.661 3.18988 11.5462 2.9127 11.3418 2.70834C11.1374 2.50398 10.8603 2.38918 10.5713 2.38918H2.94329ZM9.4543 6.09201C9.55654 5.98984 9.614 5.85125 9.61405 5.70672C9.61411 5.56218 9.55674 5.42355 9.45458 5.32131C9.35241 5.21908 9.21382 5.16161 9.06928 5.16156C8.92475 5.16151 8.78611 5.21887 8.68388 5.32104L5.98685 8.01807L4.83121 6.86243C4.78062 6.81181 4.72056 6.77165 4.65445 6.74424C4.58834 6.71683 4.51748 6.70271 4.44592 6.70268C4.30138 6.70263 4.16275 6.76 4.06051 6.86216C3.95827 6.96433 3.90081 7.10292 3.90076 7.24745C3.90071 7.39199 3.95807 7.53062 4.06024 7.63286L5.56295 9.13557C5.61861 9.19125 5.68469 9.23542 5.75742 9.26556C5.83016 9.2957 5.90812 9.31121 5.98685 9.31121C6.06558 9.31121 6.14354 9.2957 6.21627 9.26556C6.289 9.23542 6.35509 9.19125 6.41074 9.13557L9.4543 6.09201Z"
              fill="#B0DAD9"
            />
          </svg>
        </div>
        <div
          data-svg-wrapper
          data-layer="mingcute:checkbox-fill"
          className="MingcuteCheckboxFill"
          style={{ left: "8.41px", top: "159.64px", position: "absolute" }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.94329 2.27837C2.65428 2.27837 2.37711 2.39317 2.17275 2.59753C1.96838 2.80189 1.85358 3.07907 1.85358 3.36808V10.996C1.85358 11.2851 1.96838 11.5622 2.17275 11.7666C2.37711 11.9709 2.65428 12.0858 2.94329 12.0858H10.5713C10.8603 12.0858 11.1374 11.9709 11.3418 11.7666C11.5462 11.5622 11.661 11.2851 11.661 10.996V3.36808C11.661 3.07907 11.5462 2.80189 11.3418 2.59753C11.1374 2.39317 10.8603 2.27837 10.5713 2.27837H2.94329ZM9.4543 5.9812C9.55654 5.87903 9.614 5.74044 9.61405 5.59591C9.61411 5.45137 9.55674 5.31274 9.45458 5.2105C9.35241 5.10827 9.21382 5.0508 9.06928 5.05075C8.92475 5.0507 8.78611 5.10807 8.68388 5.21023L5.98685 7.90726L4.83121 6.75162C4.78062 6.701 4.72056 6.66084 4.65445 6.63343C4.58834 6.60602 4.51748 6.5919 4.44592 6.59187C4.30138 6.59182 4.16275 6.64919 4.06051 6.75135C3.95827 6.85352 3.90081 6.99211 3.90076 7.13664C3.90071 7.28118 3.95807 7.41981 4.06024 7.52205L5.56295 9.02476C5.61861 9.08044 5.68469 9.12462 5.75742 9.15475C5.83016 9.18489 5.90812 9.2004 5.98685 9.2004C6.06558 9.2004 6.14354 9.18489 6.21627 9.15475C6.289 9.12462 6.35509 9.08044 6.41074 9.02476L9.4543 5.9812Z"
              fill="#B0DAD9"
            />
          </svg>
        </div>
        <div
          data-svg-wrapper
          data-layer="mingcute:checkbox-fill"
          className="MingcuteCheckboxFill"
          style={{ left: "8.41px", top: "189.53px", position: "absolute" }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.94329 2.16754C2.65428 2.16754 2.37711 2.28235 2.17275 2.48671C1.96838 2.69107 1.85358 2.96824 1.85358 3.25725V10.8852C1.85358 11.1742 1.96838 11.4514 2.17275 11.6558C2.37711 11.8601 2.65428 11.9749 2.94329 11.9749H10.5713C10.8603 11.9749 11.1374 11.8601 11.3418 11.6558C11.5462 11.4514 11.661 11.1742 11.661 10.8852V3.25725C11.661 2.96824 11.5462 2.69107 11.3418 2.48671C11.1374 2.28235 10.8603 2.16754 10.5713 2.16754H2.94329ZM9.4543 5.87037C9.55654 5.76821 9.614 5.62962 9.61405 5.48508C9.61411 5.34055 9.55674 5.20192 9.45458 5.09968C9.35241 4.99744 9.21382 4.93998 9.06928 4.93993C8.92475 4.93987 8.78611 4.99724 8.68388 5.09941L5.98685 7.79644L4.83121 6.6408C4.78062 6.59018 4.72056 6.55001 4.65445 6.5226C4.58834 6.49519 4.51748 6.48107 4.44592 6.48105C4.30138 6.481 4.16275 6.53836 4.06051 6.64053C3.95827 6.74269 3.90081 6.88129 3.90076 7.02582C3.90071 7.17035 3.95807 7.30899 4.06024 7.41122L5.56295 8.91393C5.61861 8.96962 5.68469 9.01379 5.75742 9.04393C5.83016 9.07407 5.90812 9.08958 5.98685 9.08958C6.06558 9.08958 6.14354 9.07407 6.21627 9.04393C6.289 9.01379 6.35509 8.96962 6.41074 8.91393L9.4543 5.87037Z"
              fill="#B0DAD9"
            />
          </svg>
        </div>
        <div
          data-layer="01"
          style={{
            width: "71px",
            height: "77px",
            left: "4.19px",
            top: "0px",
            position: "absolute",
            color: "#f1b749",
            fontSize: "40px",
            fontFamily: "Montserrat",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          01
        </div>
      </div>
      <div
        data-layer="02 what youll gain"
        className="WhatYoullGain"
        style={{
          width: "485px",
          height: "279.16px",
          left: "41px",
          top: "245px",
          position: "absolute",
        }}
      >
        <div
          data-layer="Your Personalized Goals"
          className="YourPersonalizedGoals"
          style={{
            width: "236.31px",
            height: "46.7px",
            left: "47px",
            top: "17px",
            position: "absolute",
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "black",
              fontSize: "20px",
              fontFamily: "Playfair Display",
              fontStyle: "italic",
              fontWeight: 700,
              textDecoration: "underline",
              wordWrap: "break-word",
              marginRight: "10px",
            }}
          >
            Your
          </span>
          <span
            style={{
              color: "black",
              fontSize: "20px",
              fontFamily: "Playfair Display, serif",
              fontStyle: "italic",
              fontWeight: 500,
              wordWrap: "break-word",
            }}
          >
            Personalized Goals
          </span>
        </div>
        <div
          data-layer="Rectangle 1"
          className="Rectangle1"
          style={{
            width: "147px",
            height: "87px",
            left: "6px",
            top: "56px",
            position: "absolute",
            background: "#b0dad9",
            borderRadius: "7.47px",
          }}
        >
          <h3
            style={{
              width: "145px",
              height: "87px",
              left: "6px",
              top: "20px",
              position: "absolute",
            }}
          >
            {goals?.[0]}
          </h3>
        </div>
        <div
          data-layer="Rectangle 2"
          className="Rectangle2"
          style={{
            width: "147px",
            height: "87px",
            left: "172px",
            top: "56px",
            position: "absolute",
            background: "#b0dad9",
            borderRadius: "7.47px",
          }}
        >
          <h3
            style={{
              width: "145px",
              height: "87px",
              left: "6px",
              top: "20px",
              position: "absolute",
            }}
          >
            {goals?.[1]}
          </h3>
        </div>
        <div
          data-layer="Rectangle 4"
          className="Rectangle4"
          style={{
            width: "147px",
            height: "87px",
            left: "7px",
            top: "159px",
            position: "absolute",
            background: "#b0dad9",
            borderRadius: "7.47px",
          }}
        >
          <h3
            style={{
              width: "145px",
              height: "87px",
              left: "6px",
              top: "20px",
              position: "absolute",
            }}
          >
            {goals?.[3]}
          </h3>
        </div>
        <div
          data-layer="Rectangle 5"
          className="Rectangle5"
          style={{
            width: "146px",
            height: "87px",
            left: "173px",
            top: "159px",
            position: "absolute",
            background: "#b0dad9",
            borderRadius: "7.47px",
          }}
        >
          <h3
            style={{
              width: "145px",
              height: "87px",
              left: "6px",
              top: "20px",
              position: "absolute",
            }}
          >
            {goals?.[4]}
          </h3>
        </div>
        <div
          data-layer="Rectangle 3"
          className="Rectangle3"
          style={{
            width: "148px",
            height: "87px",
            left: "337px",
            top: "56px",
            position: "absolute",
            background: "#b0dad9",
            borderRadius: "7.47px",
          }}
        >
          <h3
            style={{
              width: "145px",
              height: "87px",
              left: "6px",
              top: "20px",
              position: "absolute",
            }}
          >
            {goals?.[2]}
          </h3>
        </div>
        <div
          data-layer="01"
          style={{
            width: "42.97px",
            height: "22.42px",
            left: "0px",
            top: "56px",
            position: "absolute",
            textAlign: "center",
            color: "#61acc1",
            fontSize: "18.33px",
            fontFamily: "Montserrat",
            fontWeight: 700,
            wordWrap: "break-word",
          }}
        >
          01
        </div>
        <div
          data-layer="02"
          style={{
            width: "42.97px",
            height: "22.42px",
            left: "169.06px",
            top: "56px",
            position: "absolute",
            textAlign: "center",
            color: "#61acc1",
            fontSize: "18.33px",
            fontFamily: "Montserrat",
            fontWeight: 700,
            wordWrap: "break-word",
          }}
        >
          02
        </div>
        <div
          data-layer="03"
          style={{
            width: "42.97px",
            height: "22.42px",
            left: "334.39px",
            top: "56px",
            position: "absolute",
            textAlign: "center",
            color: "#61acc1",
            fontSize: "18.33px",
            fontFamily: "Montserrat",
            fontWeight: 700,
            wordWrap: "break-word",
          }}
        >
          03
        </div>
        <div
          data-layer="Rectangle 6"
          className="Rectangle6"
          style={{
            width: "148px",
            height: "87px",
            left: "337px",
            top: "159px",
            position: "absolute",
            background: "#b0dad9",
            borderRadius: "7.47px",
          }}
        >
          <h3
            style={{
              width: "145px",
              height: "87px",
              left: "6px",
              top: "20px",
              position: "absolute",
            }}
          >
            {goals?.[5]}
          </h3>
        </div>
        <div
          data-layer="06"
          style={{
            width: "42.97px",
            height: "22.42px",
            left: "334.39px",
            top: "159px",
            position: "absolute",
            textAlign: "center",
            color: "#61acc1",
            fontSize: "18.33px",
            fontFamily: "Montserrat",
            fontWeight: 700,
            wordWrap: "break-word",
          }}
        >
          06
        </div>
        <div
          data-layer="04"
          style={{
            width: "42.97px",
            height: "22.42px",
            left: "4.67px",
            top: "159px",
            position: "absolute",
            textAlign: "center",
            color: "#61acc1",
            fontSize: "18.33px",
            fontFamily: "Montserrat",
            fontWeight: 700,
            wordWrap: "break-word",
          }}
        >
          04
        </div>
        <div
          data-layer="05"
          style={{
            width: "42.97px",
            height: "22.42px",
            left: "168.13px",
            top: "159px",
            position: "absolute",
            textAlign: "center",
            color: "#61acc1",
            fontSize: "18.33px",
            fontFamily: "Montserrat",
            fontWeight: 700,
            wordWrap: "break-word",
          }}
        >
          05
        </div>
        <div
          data-layer="This plan isn’t set in stone, it grows with you."
          className="ThisPlanIsnTSetInStoneItGrowsWithYou"
          style={{
            width: "462.35px",
            height: "26.15px",
            left: "17.43px",
            top: "253.01px",
            position: "absolute",
            textAlign: "center",
            color: "black",
            fontSize: "12.14px",
            fontFamily: "Montserrat",
            fontWeight: 300,
            wordWrap: "break-word",
          }}
        >
          This plan isn’t set in stone, it grows with you.
        </div>
        <div
          data-layer="02"
          style={{
            width: "71px",
            height: "77px",
            left: "2px",
            top: "0px",
            position: "absolute",
            color: "#f1b749",
            fontSize: "40px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            wordWrap: "break-word",
          }}
        >
          02
        </div>
      </div>
      <div
        data-layer="Meet your therapist"
        className="MeetYourTherapist"
        style={{
          width: "503.1px",
          height: "167.65px",
          left: "43px",
          top: "513px",
          position: "absolute",
        }}
      >
        <div
          data-layer="“"
          style={{
            width: "41.1px",
            height: "61.65px",
            left: "247px",
            top: "46px",
            position: "absolute",
            textAlign: "center",
            color: "#f1b749",
            fontSize: "59.78px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            wordWrap: "break-word",
          }}
        >
          “
        </div>
        <div
          data-layer="“"
          style={{
            width: "41.1px",
            height: "61.65px",
            left: "503.1px",
            top: "106px",
            position: "absolute",
            transform: "rotate(180deg)",
            transformOrigin: "top left",
            textAlign: "center",
            color: "#f1b749",
            fontSize: "59.78px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            wordWrap: "break-word",
          }}
        >
          “
        </div>
        <div
          data-layer="Meet your Therapist"
          className="MeetYourTherapist"
          style={{
            width: "325.04px",
            height: "46.7px",
            left: "56px",
            top: "17px",
            position: "absolute",
          }}
        >
          <span
            style={{
              color: "black",
              fontSize: "20px",
              fontFamily: "Playfair Display, serif",
              fontStyle: "italic",
              fontWeight: 500,
              wordWrap: "break-word",
            }}
          >
            Meet{" "}
          </span>
          <span
            style={{
              color: "black",
              fontSize: "20px",
              fontFamily: "Playfair Display, serif",
              fontStyle: "italic",
              fontWeight: 700,
              textDecoration: "underline",
              wordWrap: "break-word",
              marginRight: "10px",
            }}
          >
            your
          </span>
          <span
            style={{
              color: "black",
              fontSize: "20px",
              fontFamily: "Playfair Display, serif",
              fontStyle: "italic",
              fontWeight: 500,
              wordWrap: "break-word",
            }}
          >
            Therapist
          </span>
        </div>
        <div
          data-layer="Rectangle 6"
          className="Rectangle6"
          style={{
            width: "235.38px",
            height: "102.74px",
            left: "11px",
            top: "54px",
            position: "absolute",
            background: "#b0dad9",
            borderRadius: "7.47px",
          }}
        ></div>
        <div
          data-layer="Credentials"
          className="Credentials"
          style={{
            width: "190.54px",
            height: "42.03px",
            left: "30.61px",
            top: "97.9px",
            position: "absolute",
            color: "black",
            fontSize: "12.14px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 300,
            wordWrap: "break-word",
          }}
        >
          Credentials
        </div>
        <div
          data-layer="NAME: XYZ,"
          className="NameXyz"
          style={{
            width: "190.54px",
            height: "14.94px",
            left: "30.61px",
            top: "73.61px",
            position: "absolute",
          }}
        >
          <span
            style={{
              color: "black",
              fontSize: "12.14px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 300,
              wordWrap: "break-word",
            }}
          >
            NAME:{" "}
          </span>
          <span
            style={{
              color: "black",
              fontSize: "12.14px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 500,
              wordWrap: "break-word",
            }}
          >
            {formData?.therapistName},
          </span>
        </div>
        <div
          data-layer="I believe everyone deserves to become the best version of themselves. Therapy isn’t just about fixing problems. It’s about growth, clarity, and becoming who you’re meant to be."
          className="IBelieveEveryoneDeservesToBecomeTheBestVersionOfThemselvesTherapyIsnTJustAboutFixingProblemsItSAboutGrowthClarityAndBecomingWhoYouReMeantToBe"
          style={{
            width: "179px",
            height: "94px",
            left: "287px",
            top: "60px",
            position: "absolute",
            textAlign: "justify",
            color: "black",
            fontSize: "11px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 300,
            wordWrap: "break-word",
          }}
        >
          I believe everyone deserves to become the best version of themselves.
          Therapy isn’t just about fixing problems. It’s about growth, clarity,
          and becoming who you’re meant to be.
        </div>
        <div
          data-layer="03"
          style={{
            width: "71px",
            height: "77px",
            left: "0px",
            top: "0px",
            position: "absolute",
            color: "#f1b749",
            fontSize: "40px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            wordWrap: "break-word",
          }}
        >
          03
        </div>
      </div>
      <div
        data-layer="05 recommended sessions"
        className="RecommendedSessions"
        style={{
          width: "473.18px",
          height: "91px",
          left: "43px",
          top: "674px",
          position: "absolute",
        }}
      >
        <div
          data-layer="Recommended Sessions for You"
          className="RecommendedSessionsForYou"
          style={{
            width: "332.52px",
            height: "46.7px",
            left: "60px",
            top: "30px",
            position: "absolute",
          }}
        >
          <span
            style={{
              color: "black",
              fontSize: "20px",
              fontFamily: "Playfair Display, serif",
              fontStyle: "italic",
              fontWeight: 500,
              wordWrap: "break-word",
            }}
          >
            Recommended Sessions for{" "}
          </span>
          <span
            style={{
              color: "black",
              fontSize: "20px",
              fontFamily: "Playfair Display, serif",
              fontStyle: "italic",
              fontWeight: 700,
              textDecoration: "underline",
              wordWrap: "break-word",
            }}
          >
            You
          </span>
        </div>
        <div
          data-svg-wrapper
          data-layer="Rectangle 7"
          className="Rectangle7"
          style={{ left: "338.67px", top: "25.15px", position: "absolute" }}
        >
          <svg
            width="73"
            height="44"
            viewBox="0 0 73 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.670227 0.153015H72.5911V37.5145C72.5911 40.6096 70.082 43.1187 66.9868 43.1187H0.670227V0.153015Z"
              fill="#B0DAD9"
            />
          </svg>
        </div>
        <div
          data-layer="06"
          style={{
            width: "78.46px",
            height: "33.63px",
            left: "334px",
            top: "25px",
            position: "absolute",
            textAlign: "center",
            color: "black",
            fontSize: "33.63px",
            fontFamily: "Montserrat",
            fontWeight: "200",
            wordWrap: "break-word",
          }}
        >
          {formData?.therapist
            ? String(formData?.therapist).padStart(2, "0")
            : "00"}
        </div>
        <div
          data-svg-wrapper
          data-layer="octicon:thumbsup-16"
          className="OcticonThumbsup16"
          style={{ left: "405px", top: "0px", position: "absolute" }}
        >
          <svg
            width="69"
            height="69"
            viewBox="0 0 69 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_46_77)">
              <path
                d="M35.5711 2.68905C35.8936 2.11812 36.3839 1.66019 36.9754 1.37737C37.567 1.09454 38.2312 1.00051 38.8781 1.10801L39.8923 1.27848C41.8164 1.59905 43.651 2.32243 45.2761 3.40124C46.9012 4.48005 48.2801 5.88996 49.3225 7.53865C50.3649 9.18734 51.0473 11.0376 51.325 12.9683C51.6027 14.899 51.4694 16.8666 50.934 18.7423L48.9822 25.5693H51.8161C53.9689 25.5692 56.0921 26.071 58.017 27.0349C59.942 27.9987 61.6158 29.398 62.9056 31.1216C64.1954 32.8453 65.0655 34.8459 65.4471 36.9646C65.8286 39.0833 65.711 41.2618 65.1036 43.3271L60.2668 59.7724C59.5524 62.2012 58.0706 64.3334 56.0434 65.8498C54.0161 67.3662 51.5522 68.1854 49.0205 68.1847H28.0665C24.7278 68.1842 21.473 67.1381 18.7593 65.1931C18.0647 66.122 17.1629 66.8761 16.1258 67.3955C15.0886 67.9148 13.9446 68.185 12.7846 68.1847H7.4577C5.4798 68.1847 3.5829 67.399 2.18431 66.0004C0.78572 64.6018 0 62.7049 0 60.727L0 33.027C0 28.9103 3.34105 25.5693 7.4577 25.5693H22.0194C22.2076 25.5688 22.3923 25.5184 22.5548 25.4234C22.7172 25.3283 22.8516 25.1919 22.9442 25.0281L35.5711 2.68905ZM20.2423 58.1658L21.9299 59.5721C23.6516 61.0083 25.825 61.7924 28.0665 61.7924H49.0205C50.1715 61.7932 51.2917 61.4212 52.2136 60.7321C53.1355 60.043 53.8094 59.0739 54.1344 57.9698L58.9712 41.5245C59.2985 40.4123 59.362 39.2391 59.1566 38.0981C58.9512 36.9571 58.4826 35.8797 57.7881 34.9515C57.0936 34.0232 56.1922 33.2697 55.1555 32.7507C54.1188 32.2316 52.9754 31.9615 51.8161 31.9616H44.7462C44.2516 31.9615 43.7637 31.8466 43.321 31.6259C42.8783 31.4053 42.4929 31.0849 42.1951 30.69C41.8972 30.295 41.6951 29.8364 41.6046 29.3501C41.5142 28.8638 41.5378 28.3632 41.6736 27.8876L44.7888 16.9865C45.3161 15.1405 45.111 13.1622 44.2164 11.4635C43.3218 9.76475 41.8066 8.47649 39.9861 7.86682L28.5097 28.1731C27.8601 29.3226 26.917 30.279 25.7766 30.9446C24.6363 31.6102 23.3398 31.9612 22.0194 31.9616H20.2423V58.1658ZM13.85 31.9616H7.4577C7.17514 31.9616 6.90416 32.0738 6.70436 32.2736C6.50456 32.4734 6.39232 32.7444 6.39232 33.027V60.727C6.39232 61.3151 6.86961 61.7924 7.4577 61.7924H12.7846C13.0672 61.7924 13.3382 61.6801 13.538 61.4804C13.7378 61.2806 13.85 61.0096 13.85 60.727V31.9616Z"
                fill="#61ACC1"
              />
            </g>
            <defs>
              <clipPath id="clip0_46_77">
                <rect width="68.1847" height="68.1847" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
          data-layer="04"
          style={{
            width: "71px",
            height: "77px",
            left: "0px",
            top: "14px",
            position: "absolute",
            color: "#f1b749",
            fontSize: "40px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            wordWrap: "break-word",
          }}
        >
          04
        </div>
      </div>
      <img
        data-layer="logo 1 2"
        className="Logo12"
        alt="Logo12"
        style={{
          width: "104px",
          height: "104px",
          left: "487px",
          top: "-19px",
          position: "absolute",
        }}
        src={logo}
      />
      <div
        data-layer="Rectangle 10"
        className="Rectangle10"
        style={{
          width: "105px",
          height: "26px",
          left: "252px",
          top: "795px",
          position: "absolute",
          background: "#f1b749",
          boxShadow: "0px 2px 1.5px rgba(0, 0, 0, 0.25)",
          borderRadius: "3.76px",
          border: "1px solid white",
        }}
      ></div>
      <div
        data-layer="GET STARTED"
        className="GetStarted"
        style={{
          width: "116px",
          height: "12px",
          left: "247px",
          top: "800px",
          position: "absolute",
          textAlign: "center",
          color: "black",
          fontSize: "12px",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 600,
          wordWrap: "break-word",
        }}
      >
        GET STARTED
      </div>
      <div
        data-svg-wrapper
        data-layer="Group 4"
        className="Group4"
        style={{ left: "12px", top: "900px", position: "absolute" }}
      >
        <svg
          width="62"
          height="18"
          viewBox="0 0 62 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <a
            style={{ cursor: "pointer" }}
            href="mailto:mendingmind07@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <path
              d="M37 3H25C24.175 3 23.5 3.675 23.5 4.5V13.5C23.5 14.325 24.175 15 25 15H37C37.825 15 38.5 14.325 38.5 13.5V4.5C38.5 3.675 37.825 3 37 3ZM36.7 6.1875L31.795 9.255C31.3075 9.5625 30.6925 9.5625 30.205 9.255L25.3 6.1875C25.2248 6.14528 25.1589 6.08825 25.1064 6.01984C25.0539 5.95143 25.0158 5.87308 24.9944 5.78953C24.9731 5.70597 24.9689 5.61895 24.9821 5.53373C24.9954 5.44851 25.0258 5.36686 25.0715 5.29373C25.1172 5.22059 25.1772 5.15749 25.248 5.10825C25.3188 5.059 25.3989 5.02463 25.4834 5.00722C25.5678 4.98981 25.655 4.98973 25.7395 5.00696C25.824 5.0242 25.9041 5.0584 25.975 5.1075L31 8.25L36.025 5.1075C36.0959 5.0584 36.176 5.0242 36.2605 5.00696C36.345 4.98973 36.4322 4.98981 36.5166 5.00722C36.6011 5.02463 36.6812 5.059 36.752 5.10825C36.8228 5.15749 36.8828 5.22059 36.9285 5.29373C36.9742 5.36686 37.0046 5.44851 37.0179 5.53373C37.0311 5.61895 37.0269 5.70597 37.0056 5.78953C36.9842 5.87308 36.9461 5.95143 36.8936 6.01984C36.8411 6.08825 36.7752 6.14528 36.7 6.1875Z"
              fill="#1B738C"
            />
          </a>
          <a
            style={{ cursor: "pointer" }}
            href="https://wa.me/918433805514"
            target="_blank"
            rel="noopener noreferrer"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9 1.5C4.85775 1.5 1.5 4.85775 1.5 9C1.5 10.4175 1.89375 11.745 2.5785 12.876L1.9095 15.15C1.87109 15.2806 1.86856 15.4191 1.90218 15.5509C1.93581 15.6828 2.00434 15.8032 2.10057 15.8994C2.1968 15.9957 2.31719 16.0642 2.44906 16.0978C2.58094 16.1314 2.71944 16.1289 2.85 16.0905L5.124 15.4215C6.29305 16.1287 7.63368 16.5017 9 16.5C13.1423 16.5 16.5 13.1423 16.5 9C16.5 4.85775 13.1423 1.5 9 1.5ZM7.3035 10.6972C8.82075 12.2137 10.269 12.414 10.7805 12.4327C11.5582 12.4612 12.3157 11.8673 12.6105 11.178C12.6474 11.0922 12.6607 10.9981 12.6491 10.9054C12.6375 10.8127 12.6014 10.7248 12.5445 10.6508C12.1335 10.1258 11.5778 9.7485 11.0347 9.3735C10.9214 9.29493 10.7821 9.26337 10.646 9.28547C10.5099 9.30757 10.3876 9.38161 10.305 9.492L9.855 10.1783C9.83122 10.215 9.79436 10.2413 9.75188 10.2519C9.70941 10.2625 9.66449 10.2565 9.62625 10.2353C9.321 10.0605 8.87625 9.7635 8.55675 9.444C8.23725 9.1245 7.95825 8.7 7.8015 8.41425C7.78254 8.37784 7.77718 8.33587 7.78639 8.29586C7.7956 8.25586 7.81878 8.22045 7.85175 8.196L8.54475 7.6815C8.64394 7.5957 8.70797 7.47631 8.72458 7.34621C8.74118 7.21612 8.7092 7.08447 8.63475 6.9765C8.29875 6.4845 7.90725 5.859 7.3395 5.44425C7.26607 5.39149 7.18026 5.35859 7.09039 5.34874C7.00051 5.33888 6.90962 5.35241 6.8265 5.388C6.1365 5.6835 5.5395 6.441 5.568 7.22025C5.58675 7.73175 5.787 9.18 7.3035 10.6972Z"
              fill="#1B738C"
            />
          </a>
          <a
            style={{ cursor: "pointer" }}
            href="https://www.instagram.com/direct/t/mending__mind/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <path
              d="M53.7711 1.5C54.6148 1.50225 55.0431 1.50675 55.4128 1.51725L55.5583 1.5225C55.7263 1.5285 55.8921 1.536 56.0923 1.545C56.8903 1.5825 57.4348 1.7085 57.9126 1.89375C58.4076 2.08425 58.8246 2.34225 59.2416 2.7585C59.6231 3.1333 59.9182 3.58685 60.1063 4.0875C60.2916 4.56525 60.4176 5.10975 60.4551 5.9085C60.4641 6.108 60.4716 6.27375 60.4776 6.4425L60.4821 6.588C60.4933 6.957 60.4978 7.38525 60.4993 8.229L60.5001 8.7885V9.771C60.5019 10.3181 60.4961 10.8651 60.4828 11.412L60.4783 11.5575C60.4723 11.7263 60.4648 11.892 60.4558 12.0915C60.4183 12.8903 60.2908 13.434 60.1063 13.9125C59.9182 14.4131 59.6231 14.8667 59.2416 15.2415C58.8668 15.623 58.4132 15.9181 57.9126 16.1063C57.4348 16.2915 56.8903 16.4175 56.0923 16.455L55.5583 16.4775L55.4128 16.482C55.0431 16.4925 54.6148 16.4978 53.7711 16.4993L53.2116 16.5H52.2298C51.6825 16.5019 51.1352 16.4962 50.5881 16.4828L50.4426 16.4783C50.2645 16.4715 50.0865 16.4638 49.9086 16.455C49.1106 16.4175 48.5661 16.2915 48.0876 16.1063C47.5872 15.918 47.1339 15.6229 46.7593 15.2415C46.3775 14.8668 46.0821 14.4132 45.8938 13.9125C45.7086 13.4348 45.5826 12.8903 45.5451 12.0915L45.5226 11.5575L45.5188 11.412C45.505 10.8651 45.4987 10.3181 45.5001 9.771V8.229C45.498 7.68195 45.5035 7.1349 45.5166 6.588L45.5218 6.4425C45.5278 6.27375 45.5353 6.108 45.5443 5.9085C45.5818 5.10975 45.7078 4.566 45.8931 4.0875C46.0818 3.58665 46.3777 3.13308 46.7601 2.7585C47.1344 2.37716 47.5875 2.08206 48.0876 1.89375C48.5661 1.7085 49.1098 1.5825 49.9086 1.545C50.1081 1.536 50.2746 1.5285 50.4426 1.5225L50.5881 1.518C51.135 1.50467 51.682 1.49892 52.2291 1.50075L53.7711 1.5ZM53.0001 5.25C52.0055 5.25 51.0517 5.64509 50.3484 6.34835C49.6451 7.05161 49.2501 8.00544 49.2501 9C49.2501 9.99456 49.6451 10.9484 50.3484 11.6517C51.0517 12.3549 52.0055 12.75 53.0001 12.75C53.9946 12.75 54.9484 12.3549 55.6517 11.6517C56.355 10.9484 56.7501 9.99456 56.7501 9C56.7501 8.00544 56.355 7.05161 55.6517 6.34835C54.9484 5.64509 53.9946 5.25 53.0001 5.25ZM53.0001 6.75C53.2955 6.74995 53.5881 6.8081 53.8611 6.92113C54.1341 7.03416 54.3822 7.19985 54.5912 7.40875C54.8001 7.61764 54.9659 7.86565 55.079 8.13862C55.1921 8.41158 55.2504 8.70415 55.2504 8.99963C55.2505 9.2951 55.1923 9.58769 55.0793 9.86069C54.9663 10.1337 54.8006 10.3818 54.5917 10.5907C54.3828 10.7997 54.1348 10.9655 53.8618 11.0786C53.5889 11.1917 53.2963 11.25 53.0008 11.25C52.4041 11.25 51.8318 11.0129 51.4098 10.591C50.9879 10.169 50.7508 9.59674 50.7508 9C50.7508 8.40326 50.9879 7.83097 51.4098 7.40901C51.8318 6.98705 52.4041 6.75 53.0008 6.75M56.9383 4.125C56.6897 4.125 56.4512 4.22377 56.2754 4.39959C56.0996 4.5754 56.0008 4.81386 56.0008 5.0625C56.0008 5.31114 56.0996 5.5496 56.2754 5.72541C56.4512 5.90123 56.6897 6 56.9383 6C57.1869 6 57.4254 5.90123 57.6012 5.72541C57.777 5.5496 57.8758 5.31114 57.8758 5.0625C57.8758 4.81386 57.777 4.5754 57.6012 4.39959C57.4254 4.22377 57.1869 4.125 56.9383 4.125Z"
              fill="#1B738C"
            />
          </a>
        </svg>
      </div>
    </div>
  );
}

export default PageTwo;
