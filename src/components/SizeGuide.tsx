
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const SizeGuide = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-sm text-pink-400 hover:text-pink-500 p-0">
          Size Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">Size Guide</DialogTitle>
        </DialogHeader>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-pink-50">
              <tr>
                <th className="p-3 text-left font-medium">Size</th>
                <th className="p-3 text-center font-medium">Bust (in)</th>
                <th className="p-3 text-center font-medium">Waist (in)</th>
                <th className="p-3 text-center font-medium">Hips (in)</th>
                <th className="p-3 text-center font-medium">Length (in)</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="bg-white">
                <td className="p-3 font-medium">XS</td>
                <td className="p-3 text-center">31-32</td>
                <td className="p-3 text-center">24-25</td>
                <td className="p-3 text-center">34-35</td>
                <td className="p-3 text-center">36</td>
              </tr>
              <tr className="bg-purple-50/50">
                <td className="p-3 font-medium">S</td>
                <td className="p-3 text-center">33-34</td>
                <td className="p-3 text-center">26-27</td>
                <td className="p-3 text-center">36-37</td>
                <td className="p-3 text-center">37</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 font-medium">M</td>
                <td className="p-3 text-center">35-36</td>
                <td className="p-3 text-center">28-29</td>
                <td className="p-3 text-center">38-39</td>
                <td className="p-3 text-center">38</td>
              </tr>
              <tr className="bg-purple-50/50">
                <td className="p-3 font-medium">L</td>
                <td className="p-3 text-center">37-39</td>
                <td className="p-3 text-center">30-32</td>
                <td className="p-3 text-center">40-42</td>
                <td className="p-3 text-center">39</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 font-medium">XL</td>
                <td className="p-3 text-center">40-42</td>
                <td className="p-3 text-center">33-35</td>
                <td className="p-3 text-center">43-45</td>
                <td className="p-3 text-center">40</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-sm text-gray-500 space-y-2">
          <p>• All measurements are in inches.</p>
          <p>• Always refer to your actual body measurements rather than your regular clothing size.</p>
          <p>• For the best fit, we recommend getting measured by a professional.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SizeGuide;
