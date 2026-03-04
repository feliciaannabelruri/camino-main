"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, Loader2 } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (email && password) {
      router.push("/dashboard")
    } else {
      setError("Please enter both email and password.")
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen">
      {/* Left panel - branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between bg-sidebar text-sidebar-foreground p-10">
        <div className="flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-sidebar-primary">
            <span className="text-sm font-bold text-sidebar-primary-foreground">C</span>
          </div>
          <span className="text-lg font-semibold">Community</span>
        </div>

        <div className="max-w-md">
          <h1 className="text-3xl font-bold tracking-tight text-balance">
            Manage your community with confidence
          </h1>
          <p className="mt-3 text-sidebar-foreground/70 text-pretty leading-relaxed">
            Track members, run campaigns, monitor channels, and celebrate your top contributors all from a single dashboard.
          </p>
        </div>

        <p className="text-xs text-sidebar-foreground/50">
          Community Dashboard v1.0
        </p>
      </div>

      {/* Right panel - login form */}
      <div className="flex flex-1 items-center justify-center p-6 bg-background">
        <Card className="w-full max-w-sm border-border/60">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2 lg:hidden">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">C</span>
              </div>
              <span className="text-base font-semibold text-foreground">Community</span>
            </div>
            <CardTitle className="text-xl text-foreground">Welcome back</CardTitle>
            <CardDescription>Sign in to your dashboard account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@community.io"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <button
                    type="button"
                    className="text-xs text-primary hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                    <span className="sr-only">
                      {showPassword ? "Hide password" : "Show password"}
                    </span>
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-sm text-destructive" role="alert">
                  {error}
                </p>
              )}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                {"Don't have an account? "}
                <button type="button" className="text-primary hover:underline">
                  Contact admin
                </button>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
