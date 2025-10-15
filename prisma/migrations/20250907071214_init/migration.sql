-- CreateTable
CREATE TABLE "public"."Users" (
    "userId" UUID NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'GUEST',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "public"."Goals" (
    "goalId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "MorY" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" UUID NOT NULL,

    CONSTRAINT "Goals_pkey" PRIMARY KEY ("goalId")
);

-- CreateTable
CREATE TABLE "public"."Plans" (
    "uniqueId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "periodNum" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "deadline" TEXT NOT NULL,
    "isDone" BOOLEAN NOT NULL DEFAULT false,
    "goalId" UUID NOT NULL,

    CONSTRAINT "Plans_pkey" PRIMARY KEY ("uniqueId")
);

-- AddForeignKey
ALTER TABLE "public"."Goals" ADD CONSTRAINT "Goals_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Plans" ADD CONSTRAINT "Plans_goalId_fkey" FOREIGN KEY ("goalId") REFERENCES "public"."Goals"("goalId") ON DELETE RESTRICT ON UPDATE CASCADE;
