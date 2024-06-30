import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

type SliderProps = React.ComponentProps<typeof Slider>

export default function SliderDemo({ className, ...props }: SliderProps) {
    return (
        <section className={cn("", className)}>
            <div className="w-full p-4 bg-secondary rounded-md mt-4">
                <h3>Current Plan: Free</h3>
                <Button className="my-4 w-full">
                    Go Pro!
                </Button>
                <h4>Current Users: 50</h4>
                <Slider
                    defaultValue={[50]}
                    max={100}
                    step={2}
                    className={"w-full mt-4"}
                    {...props}
                    showThumb={false}
                />
                <div className="flex justify-between">
                    <span>1</span>
                    <span>100</span>
                </div>
            </div>

        </section>

    )
}
