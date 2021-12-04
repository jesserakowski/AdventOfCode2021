using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;

namespace Day3
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = System.IO.File.ReadAllLines(@"input.txt").ToList();

            if (input.Count() > 0)
            {
                var lineLength = input[0].Trim().Length;
                var totalInputs = input.Count();
                StringBuilder gsb = new StringBuilder();
                StringBuilder esb = new StringBuilder();

                Console.WriteLine(totalInputs);
                for (int i = 0; i < lineLength; i++)
                {
                    var count1 = input.Where(x => x.Substring(i, 1) == "1").Count();
                    var count0 = totalInputs - count1;

                    if (count0 > count1)
                    {
                        esb.Append("1");
                        gsb.Append("0");
                    }
                    else
                    {
                        esb.Append("0");
                        gsb.Append("1");
                    }
                }

                var epsilon = Convert.ToInt64(esb.ToString(), 2);
                var gamma = Convert.ToInt64(gsb.ToString(), 2);
                var output = gamma * epsilon;

                Console.WriteLine($"GAMMA = {gamma}. EPSILON = {epsilon}");
                Console.WriteLine($"Total is {output}");
            }
        }
    }
}