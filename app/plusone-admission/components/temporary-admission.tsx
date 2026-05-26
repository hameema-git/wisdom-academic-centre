"use client"

export function TemporaryAdmission() {

  return (

    <section className="py-20 bg-white">

      <div className="container mx-auto px-4 max-w-5xl">

        <div className="bg-blue-50 border border-blue-200 rounded-3xl p-8">

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Temporary vs Permanent Admission
          </h2>

          <div className="space-y-5 text-slate-700 leading-relaxed">

            <p>
              Students receiving allotment in lower options can take
              <span className="font-semibold text-blue-700">
                {" "}Temporary Admission{" "}
              </span>
              while waiting for higher options in future allotments.
            </p>

            <p>
              Students satisfied with their allotment can confirm
              <span className="font-semibold text-green-700">
                {" "}Permanent Admission{" "}
              </span>
              by paying fees and locking the seat.
            </p>

            <p>
              Failure to confirm admission within the official deadline may
              result in cancellation of the allotment.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}