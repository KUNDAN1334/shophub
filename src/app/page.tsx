import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";


export default function Home() {
 return <div>
  <Button className="m-3" variant={"elevated"}>
    Test
  </Button>

  <Input placeholder="Test" />
  <Progress className="my-3" value={50} />
 </div>
}
