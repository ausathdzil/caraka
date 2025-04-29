import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Google } from '../signup/page';

export default function Login() {
  return (
    <Card className="w-full max-w-sm border-none shadow-none">
      <CardHeader className="text-center">
        <CardTitle className="font-serif text-2xl">Log In</CardTitle>
        <CardDescription className="font-normal">
          Enter your credentials below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button className="w-full" variant="secondary" size="lg">
          <Google />
          Continue with Google
        </Button>

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground font-serif">
            OR
          </span>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••••••"
              required
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <Button type="submit" className="w-full" size="lg">
          Log In
        </Button>

        <span className="font-normal font-serif text-xs text-muted-foreground text-center">
          By continuing, you agree to Caraka&apos;s{' '}
          <Link className="underline" href="#">
            Terms of Service
          </Link>{' '}
          and acknowledge their{' '}
          <Link className="underline" href="#">
            Privacy Policy.
          </Link>
        </span>

        <span className="font-normal font-serif text-center">
          Don&apos;t have an account?{' '}
          <Link className="underline text-primary" href="/signup">
            Sign Up
          </Link>
        </span>
      </CardFooter>
    </Card>
  );
}
