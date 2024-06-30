import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AccountMetric from "./_components/AccountsPurchaseMetric";
import StreamTypeMetric from "./_components/StreamTypeMetric";

type Props = {};

const Portal = (props: Props) => {
  return (
    <aside className="w-full p-6 min-h-dvh pt-16">
      <div className="max-w-3xl mx-auto pt-4 lg:container">
        <h1>Metrics</h1>
        <div className="w-full h-full py-8">
          <div className="grid grid-cols-1 2xl:grid-cols-2 grid-rows-2 p-4 gap-8 my-auto">
            <Card className="w-full h-full">
              <CardHeader>
                <CardTitle>Money Earned this year</CardTitle>
              </CardHeader>
              <CardContent className="h-full max-h-[280px] ">
                <AccountMetric />
              </CardContent>
            </Card>

            <Card className="w-full h-full">
              <CardHeader>
                <CardTitle>Streaming Account Types</CardTitle>
              </CardHeader>
              <CardContent className="h-full max-h-[280px] ">
                <StreamTypeMetric />
              </CardContent>
            </Card>

            <Card className="w-full h-full min-w-[500px]">
              <CardHeader>
                <CardTitle>Active Users this Month</CardTitle>
              </CardHeader>
              <CardContent className="h-full max-h-[260px] ">
                <div className="flex justify-center items-center h-full">
                  <h1>1025</h1>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full h-full min-w-[500px]">
              <CardHeader>
                <CardTitle>Active Workers this Month</CardTitle>
              </CardHeader>
              <CardContent className="h-full max-h-[260px] ">
                <div className="flex justify-center items-center h-full">
                  <h1>55</h1>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Portal;
