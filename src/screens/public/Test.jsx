import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function Test() {
    return (
        <div className="flex justify-center items-center min-h-screen gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Tên bài kiểm tra</CardTitle>
                    <CardDescription>What area are you having problems with?</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="area">Area</Label>
                            <Select defaultValue="billing">
                                <SelectTrigger id="area">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="team">Team</SelectItem>
                                    <SelectItem value="billing">Billing</SelectItem>
                                    <SelectItem value="account">Account</SelectItem>
                                    <SelectItem value="deployments">Deployments</SelectItem>
                                    <SelectItem value="support">Support</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="security-level">Số lượng câu hỏi</Label>
                            <Select defaultValue="2">
                                <SelectTrigger id="security-level" className="w-[200px] truncate">
                                    <SelectValue placeholder="Select level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">10 (Lowestst)</SelectItem>
                                    <SelectItem value="2">20</SelectItem>
                                    <SelectItem value="3">30 (Highest)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="I need help with..." />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            placeholder="Please include all information relevant to your issue."
                        />
                    </div>
                </CardContent>
                <CardFooter className="justify-between space-x-2">
                    <Button>Cancel</Button>
                    <Button>Submit</Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default Test;
