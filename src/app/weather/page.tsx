import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WeatherPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle>실시간 날씨 정보</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              아이콘
            </div>
            <h2 className="text-2xl font-bold">흐림</h2>
            <div className="text-xl">
              날씨 설명
            </div>
            <div className="text-xl">
              설명
            </div>
            <div className="flex justify-between mt-4">
              <div>
                ThermometerSun
                <span>현재 온도: ~~°C</span>
              </div>
              <div>
                Cloud
                <span>습도: ~~%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
