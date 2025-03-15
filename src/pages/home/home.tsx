import HorizotalBlock from "./horizontal-block";
import AppointmentTable from "./appointment-table";
import { useEffect, useState } from "react";
import Loader from "../../components/loader";
import { useParams } from "react-router-dom";
import { useGetSesssionDataForHome, useGetUpcomingSession } from "./services";
import { Sessions } from "../../utils/types";
// import PendingRequest from "./pendig-requests";

interface ISessionDataHome {
  totalSessionsCompleted: number;
  totalUpcomingSessions: number;
  totalTodaysSessions: number;
}

const Home = () => {
  const [isHorzontalLoading, setIsHorizontalLoading] = useState(true);
  const [isSessionsLoading, setIsSessionsLoading] = useState(true);

  const { organizationId } = useParams<{
    organizationId: string;
  }>();

  const [upcomingSessions, setUpcomingSessions] = useState<Sessions[]>();
  const [sessionData, setSessionData] = useState<ISessionDataHome>();

  const getUpcomingSessions = useGetUpcomingSession(organizationId);

  const getSessionDataForHome = useGetSesssionDataForHome(organizationId);

  useEffect(() => {
    if (getSessionDataForHome.isSuccess || getSessionDataForHome.isError) {
      setHorizontalLoading(false);
    }

    if (getSessionDataForHome.isSuccess && getSessionDataForHome.data) {
      setSessionData(getSessionDataForHome.data);
    }

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getSessionDataForHome.isSuccess, getSessionDataForHome.isError]);

  useEffect(() => {
    if (getUpcomingSessions.isSuccess || getUpcomingSessions.isError) {
      setSessionLoader(false);
    }

    if (getUpcomingSessions.isSuccess && getUpcomingSessions.data) {
      setUpcomingSessions(getUpcomingSessions.data.upcoming);
    }

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getUpcomingSessions.isSuccess, getUpcomingSessions.isError]);
  const setSessionLoader = (isLoading: boolean) => {
    setIsSessionsLoading(isLoading);
  };

  const setHorizontalLoading = (isLoading: boolean) => {
    setIsHorizontalLoading(isLoading);
  };

  return (
    <div className="p-8">
      {isHorzontalLoading || isSessionsLoading ? (
        <Loader />
      ) : (
        <>
          <HorizotalBlock sessionData={sessionData} />

          {/* Content Row */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8"> */}
          <div className="gap-6 mt-8">
            {/* Appointments Table */}
            <AppointmentTable
              upcomingSessions={upcomingSessions}
              isLoading={getUpcomingSessions.isLoading}
            />
            {/* Pending request */}
            {/* <PendingRequest /> */}
          </div>
          {/* </div> */}
        </>
      )}
    </div>
  );
};

export default Home;
