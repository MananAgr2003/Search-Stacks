import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "../ui/button";


export function Recommedation() {
  return (
    <section className="w-full py-8">
      <div className="container space-y-8 px-4 md:px-6">
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold">Recommendations for You</h3>
            <p className="text-gray-500 dark:text-gray-600">
              Curated based on your usage
            </p>
          </div>

          <div className="text-black bg-white hover:bg-black hover:text-white border border-black md:max-w-[30vw] inline-flex items-center justify-center rounded-md text-xs font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 px-3 py-3 mx-2 max-w-[95vw]">
            Test Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, nostrum.
          </div>
          <div className="text-black bg-white hover:bg-black hover:text-white border border-black md:max-w-[30vw] inline-flex items-center justify-center rounded-md text-xs font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 px-3 py-3 mx-2 max-w-[95vw]">
            Test Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, nostrum.
          </div>
          <div className="text-black bg-white hover:bg-black hover:text-white border border-black md:max-w-[30vw] inline-flex items-center justify-center rounded-md text-xs font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 px-3 py-3 mx-2 max-w-[95vw]">
            Test Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, nostrum.
          </div>
        </div>
      </div>
    </section>
  );
}
