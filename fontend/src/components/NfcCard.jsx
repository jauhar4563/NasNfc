import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import chipImg from "../assets/pngwing.com.png";

export default function NfcCard({ company }) {
  
  return (
    <Card
      sx={{
        minWidth: 350,
        minHeight: 190,
        color: "black",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        },
      }}
      
      className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
    >
      <CardContent className="flex flex-col justify-end h-48 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white p-5 rounded-xl">
        <div className="flex">
          <div className="flex w-4/5 flex-col justify-end">
            <p className="text-xl font-bold">{company.name}</p>
            <p className="text-sm">{company.nfcCode}</p>
          </div>
          <div className="flex w-1/5 justify-end">
            <img src={chipImg} alt="" className="h-12 w-12" />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-transparent to-black opacity-70"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-50"></div>
      </CardContent>
    </Card>
  );
}
