import { NextResponse } from "next/server";
import MenuModel from "@/models/menu";

export async function POST(req: Request) {
  try {
    const { menuName, menuDesc, sections } = await req.json();

    // Create the new menu object
    const newMenu = await MenuModel.create({
      menuName,
      menuDesc,
      sections,
    });

    // Return a response
    return NextResponse.json(
      { message: "Menu added successfully", data: newMenu },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    // Return an error response
    return NextResponse.json(
      { message: "Error adding menu", error: errorMessage },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Retrieve all menus from the database
    const menus = await MenuModel.find({});

    // Return the fetched menus
    return NextResponse.json(
      { message: "Menus fetched successfully", data: menus },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    // Return an error response
    return NextResponse.json(
      { message: "Error fetching menus", error: errorMessage },
      { status: 500 }
    );
  }
}
