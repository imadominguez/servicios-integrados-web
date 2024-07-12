import { Card, CardContent, CardFooter } from '@/components/ui/card';

export default function Loading() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-2 lg:px-4 xl:px-10 2xl:p-o max-w-[2000px]">
      {new Array(10).fill(0).map((_, index) => (
        <Card
          key={index}
          className="max-w-sm rounded-lg overflow-hidden shadow-lg border-zinc-300"
        >
          <div className="relative h-[300px] w-full animate-pulse bg-gray-300 rounded-t-lg">
            &nbsp;
          </div>

          <CardContent className="px-6 py-4 space-y-4 flex-grow relative flex-col">
            <div className="animate-pulse bg-gray-300">&nbsp;</div>
            <p className="animate-pulse bg-gray-300">
              &nbsp;
              <br />
              &nbsp;
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex gap-2 whitespace-nowrap flex-wrap w-full">
              <span className=" py-1 rounded-lg animate-pulse bg-gray-300 w-full">
                &nbsp;
              </span>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
