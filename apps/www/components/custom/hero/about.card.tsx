import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Spotlight } from "../spotlight";
import { SectionHeaderDescription } from "../text-wrappers";
import { Tilt } from "../tilt";

export function TiltSpotlight() {
  return (
    <div className='max-w-xl'>
      <Tilt
        rotationFactor={6}
        isRevese
        style={{
          transformOrigin: 'center center',
        }}
        springOptions={{
          stiffness: 26.7,
          damping: 4.1,
          mass: 0.2,
        }}
        className='group relative rounded-xl'
      >
        <Spotlight
          className='z-10 from-white/50 via-white/20 to-white/10 blur-2xl'
          size={248}
          springOptions={{
            stiffness: 28.7,
            damping: 2.1,
            mass: 0.2,
          }}
        />
        <Card className="rounded-2xl border-dashed border-b-2">
  <CardHeader>
  <img
          src='https://images.beta.cosmos.so/f7fcb95d-981b-4cb3-897f-e35f6c20e830?format=jpeg'
          alt='Ghost in the shell - Kôkaku kidôtai'
          className='h-40 w-full rounded-xl object-cover grayscale duration-700 group-hover:grayscale-0'
        />
  </CardHeader>
  <CardFooter>
      <SectionHeaderDescription>
        Ok baby bye bye
      </SectionHeaderDescription>
      </CardFooter>
</Card>
      </Tilt>
    </div>
  );
}
